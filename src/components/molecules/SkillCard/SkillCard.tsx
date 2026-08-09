'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import SkillIconList from './SkillIconList';

import type { Skill } from '@/types/Skill';

export interface SkillCardProps {
  skill: Skill;
}

/**
 * The full-size card, used for the handful of `core` skills. Laid out as a
 * column with the icon strip pushed to the bottom by `mt-auto`, so the strips
 * line up across a row however much prose each card carries.
 */
const SkillCard = ({ skill }: SkillCardProps) => (
  <article className='flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900'>
    <h3 className='mb-3 text-xl'>{skill.title}</h3>

    <div className='mb-5 text-sm font-light leading-relaxed text-slate-600 dark:text-slate-400 [&_a]:text-primary-600 [&_a]:underline dark:[&_a]:text-primary-400 [&_p]:mb-3 [&_p:last-child]:mb-0'>
      <ReactMarkdown>{skill.description}</ReactMarkdown>
    </div>

    <SkillIconList icons={skill.icons} size={30} className='mt-auto' />
  </article>
);

export default SkillCard;
