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
}: {
  tools: string[];
  className?: string;
  size?: string;
}) => (
  <IconContext.Provider value={{ size }}>
    <ul
      className={clsxm(
        'flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300',
        className,
      )}
      aria-label='Built with'
    >
      {tools.map((tool) => {
        const Icon = toolIconMapping[tool];
        if (!Icon) return null;
        return (
          <li key={tool} title={toolLabel(tool)}>
            <span role='img' aria-label={toolLabel(tool)}>
              <Icon />
            </span>
          </li>
        );
      })}
    </ul>
  </IconContext.Provider>
);

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
