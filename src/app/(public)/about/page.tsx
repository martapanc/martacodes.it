import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import * as React from 'react';

import { shortTextQuery } from '@/queries/short-texts';
import { skillQuery } from '@/queries/skills';

import { sanityClient } from '../../../../sanity/lib/client';

import { ShortText } from '@/types/ShortText';
import { Skill } from '@/types/Skill';
import { SkillIcon } from '@/types/SkillIcon';

export const metadata = {
  title: 'About | MartaCodes.it',
  description: 'About page',
};

const getData = async () => {
  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  const shortTexts: ShortText[] = await sanityClient.fetch(shortTextQuery);

  return {
    shortTexts,
    skills,
  };
};

const AboutPage = async () => {
  const { shortTexts, skills } = await getData();

  const softwareDevelopment: ShortText | undefined = shortTexts.find(
    (item) => item.name === 'software-development'
  );

  const iconDimension = 36;
  const titleIconDimension = 42;

  return (
    <main className='min-h-main'>
      <section className='dark:bg-dark bg-white'>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>About</h1>

          {softwareDevelopment && (
            <div>
              <div className='m-2 flex'>
                <Image
                  className='mr-2 h-auto'
                  src={softwareDevelopment.iconUrl}
                  alt={softwareDevelopment.title}
                  width={titleIconDimension}
                  height={titleIconDimension}
                />

                <h2>{softwareDevelopment.title}</h2>
              </div>

              <div className='mb-5'>
                <PortableText value={softwareDevelopment.content} />
              </div>
            </div>
          )}

          <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'>
            {skills.map((skill: Skill) => (
              <div
                key={skill.name}
                className='skill-container rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
              >
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
