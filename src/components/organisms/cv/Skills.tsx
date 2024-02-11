'use client';

import * as React from 'react';
import { useState } from 'react';

import Button from '../../atoms/buttons/Button';
import SkillCard from '../../molecules/SkillCard/SkillCard';
import { Skill } from '../../../../../martacodes.it-restruct/src/types/Skill';

export interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  const initialDisplayCount = 3; // Number of items to initially display
  const [showAllSkills, setShowAllSkills] = useState(false);

  const displayedSkills = showAllSkills
    ? skills
    : skills.slice(0, initialDisplayCount);

  const toggleShowAllSkills = () => {
    setShowAllSkills(!showAllSkills);
  };

  return (
    <div className='mb-4'>
      <div className='mb-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
        {displayedSkills.map((skill: Skill) => (
          <SkillCard skill={skill} key={skill.title} />
        ))}
      </div>

      {!showAllSkills && skills.length > initialDisplayCount && (
        <div className='flex w-full justify-end px-4'>
          <Button color='dark' onClick={toggleShowAllSkills}>
            Show more
          </Button>
        </div>
      )}
    </div>
  );
};

export default Skills;
