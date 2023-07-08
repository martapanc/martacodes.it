import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import { skillQuery } from '@/queries/skills';

import { sanityClient } from '../../../../sanity/lib/client';

import { Skill } from '@/types/Skill';
import { SkillIcon } from '@/types/SkillIcon';

const getData = async () => {
  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  return {
    skills,
  };
};

const AboutPage = async () => {
  const { skills } = await getData();

  const iconDimension = 36;

  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>About</h1>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-10'>
            {skills.map((skill: Skill) => (
              <div key={skill.name} className='skill-container'>
                <div className='flex'>
                  {skill.icons.map((icon: SkillIcon) => (
                    <Image
                      key={icon._id}
                      height={iconDimension}
                      width={iconDimension}
                      alt={icon.title}
                      src={icon.url}
                    />
                  ))}
                </div>

                <h3>{skill.title}</h3>

                <span className='skill-description text-justify font-light'>
                  <PortableText value={skill.description} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
