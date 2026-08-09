'use client';

import * as React from 'react';

import SkillIconList from './SkillIconList';

import type { Skill } from '@/types/Skill';

interface CompactSkillCardProps {
  skill: Skill;
  onReadMore: (skill: Skill) => void;
}

/**
 * The tail of the skill list, where the one-line `summary` stands in for the
 * prose. Every card carries the same three rows, so the grid stays even and the
 * full description is a click away rather than a wall of text.
 */
const CompactSkillCard = ({ skill, onReadMore }: CompactSkillCardProps) => (
  <article className='flex h-full flex-col rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900'>
    <h3 className='mb-2 text-base'>{skill.title}</h3>

    <p className='mb-4 text-sm font-light text-slate-600 dark:text-slate-400'>
      {skill.summary}
    </p>

    <div className='mt-auto flex flex-wrap items-center justify-between gap-3'>
      <SkillIconList icons={skill.icons} size={22} />
      <button
        type='button'
        onClick={() => onReadMore(skill)}
        className='cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-primary-400'
      >
        Details
      </button>
    </div>
  </article>
);

export default CompactSkillCard;
