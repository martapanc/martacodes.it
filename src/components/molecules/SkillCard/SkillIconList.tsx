'use client';

import * as React from 'react';

import clsxm from '@/lib/clsxm';

import { skillIconMapping } from './SkillIcons';

import type { SkillIconName } from '@/types/Skill';

interface SkillIconListProps {
  icons: SkillIconName[];
  /** Rendered size in px */
  size?: number;
  className?: string;
}

/**
 * Monochrome icon strip, coloured off the list's own text colour, the same
 * treatment the project cards give their tool icons.
 */
const SkillIconList = ({ icons, size = 28, className }: SkillIconListProps) => (
  <ul
    className={clsxm(
      'flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300',
      className,
    )}
    aria-label='Technologies'
  >
    {icons.map((name) => {
      const Icon = skillIconMapping[name];

      // An unmapped name has nothing to draw, and rendering `undefined` as a
      // component would take the page down with it.
      if (!Icon) return null;

      return (
        <li key={name} title={name} className='flex items-center'>
          <Icon style={{ height: size, width: size }} role='img' aria-label={name} />
        </li>
      );
    })}
  </ul>
);

export default SkillIconList;
