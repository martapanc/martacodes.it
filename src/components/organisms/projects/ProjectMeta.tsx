'use client';

import * as React from 'react';
import { IconContext } from 'react-icons';

import UnstyledLink from '@/components/atoms/links/UnstyledLink';
import clsxm from '@/lib/clsxm';
import { toolLabel } from '@/lib/projectFilters';

export { projectYear } from '@/lib/projectFilters';

import { linkIconMapping, toolIconMapping } from './Icons';

/** Human-readable names for the keys of `project.links`. */
const LINK_LABELS: Record<string, string> = {
  article: 'Read the article',
  github: 'View source on GitHub',
  github2: 'View companion repo on GitHub',
  publicUrl: 'Visit the site',
  screenshots: 'See screenshots',
  video: 'Watch on YouTube',
  video2: 'Watch the video',
};

/**
 * react-icons render with `fill: currentColor`, so colour comes from the text
 * colour of the wrapper. The older cards instead resolved a hex from the theme
 * in an effect, which meant they rendered with no colour on first paint.
 */
export const ToolIcons = ({
  tools,
  className,
  size = '1.25em',
  max,
}: {
  tools: string[];
  className?: string;
  size?: string;
  /** Show at most this many icons, collapsing the rest into a "+N" chip. */
  max?: number;
}) => {
  const iconTools = tools.filter((tool) => toolIconMapping[tool]);
  const shown = max === undefined ? iconTools : iconTools.slice(0, max);
  const hidden = iconTools.slice(shown.length).map(toolLabel);

  return (
    <IconContext.Provider value={{ size }}>
      <ul
        className={clsxm(
          'flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300',
          className,
        )}
        aria-label='Built with'
      >
        {shown.map((tool) => {
          const Icon = toolIconMapping[tool];
          return (
            <li key={tool} title={toolLabel(tool)}>
              <span role='img' aria-label={toolLabel(tool)}>
                <Icon />
              </span>
            </li>
          );
        })}
        {hidden.length > 0 && (
          <li
            title={hidden.join(', ')}
            aria-label={`and ${hidden.join(', ')}`}
            className='rounded-full bg-slate-200 px-1.5 font-mono text-xs leading-5 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
          >
            +{hidden.length}
          </li>
        )}
      </ul>
    </IconContext.Provider>
  );
};

export const LinkIcons = ({
  links,
  className,
  size = '1.25em',
}: {
  links: Record<string, string | undefined>;
  className?: string;
  size?: string;
}) => (
  <IconContext.Provider value={{ size }}>
    <ul className={clsxm('flex flex-wrap items-center gap-3', className)}>
      {Object.entries(links).map(([key, url]) => {
        const Icon = linkIconMapping[key];
        // Guard on both: an unrecognised key would otherwise render `undefined`
        // as a component and crash the whole page.
        if (!Icon || !url) return null;
        const label = LINK_LABELS[key] ?? key;
        return (
          <li key={key}>
            <UnstyledLink
              href={url}
              aria-label={label}
              title={label}
              className='block text-slate-500 transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-300'
            >
              <Icon />
            </UnstyledLink>
          </li>
        );
      })}
    </ul>
  </IconContext.Provider>
);
