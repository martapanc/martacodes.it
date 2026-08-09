'use client';

import * as React from 'react';
import { useMemo, useState } from 'react';

import CompactSkillCard from '@/components/molecules/SkillCard/CompactSkillCard';
import SkillCard from '@/components/molecules/SkillCard/SkillCard';
import SkillDialog from '@/components/molecules/SkillCard/SkillDialog';

import type { Skill } from '@/types/Skill';

export interface SkillsProps {
  skills: Skill[];
}

const Skills = ({ skills }: SkillsProps) => {
  const [openSkill, setOpenSkill] = useState<Skill | null>(null);

  const { core, rest } = useMemo(
    () => ({
      core: skills.filter((skill) => skill.core),
      rest: skills.filter((skill) => !skill.core),
    }),
    [skills],
  );

  return (
    <div className='mb-8'>
      {core.length > 0 && (
        <>
          <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
            Core stack
          </h2>
          <div className='mb-10 grid gap-5 md:grid-cols-2' data-reveal-group>
            {core.map((skill) => (
              <SkillCard key={skill.title} skill={skill} />
            ))}
          </div>
        </>
      )}

      {rest.length > 0 && (
        <>
          <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
            Also working with
          </h2>
          <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-reveal-group>
            {rest.map((skill) => (
              <CompactSkillCard
                key={skill.title}
                skill={skill}
                onReadMore={setOpenSkill}
              />
            ))}
          </div>
        </>
      )}

      <SkillDialog skill={openSkill} onClose={() => setOpenSkill(null)} />
    </div>
  );
};

export default Skills;
