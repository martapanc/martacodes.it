'use client';

import Image from 'next/image';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { Icon } from '@/types/Icon';
import { Skill } from '@/types/Skill';

export interface SkillCardProps {
  skill: Skill;
}
const SkillCard = ({ skill }: SkillCardProps) => {
  const iconDimension = 36;

  return (
    <div
      key={skill.title}
      className='skill-container rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
    >
      <div className='flex w-full'>
        {skill.icons.map((icon: Icon) => (
          <Image
            className='me-1 pb-1 rounded-md'
            key={icon.id}
            height={iconDimension}
            width={iconDimension}
            alt={icon.name}
            src={icon.url}
          />
        ))}
      </div>

      <h3>{skill.title}</h3>

      <span className='skill-description text-justify font-light'>
        <ReactMarkdown>{skill.description}</ReactMarkdown>
      </span>
    </div>
  );
};

export default SkillCard;
