'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { AiOutlineCloud } from 'react-icons/ai';
import { DiAndroid } from 'react-icons/di';
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaPhp,
  FaRaspberryPi,
} from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import {
  SiCsharp,
  SiDotnet,
  SiFirebase,
  SiIeee,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVercel,
} from 'react-icons/si';
import { TbBrandKotlin } from 'react-icons/tb';
import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Project } from '@/types/Project';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  const { theme } = useTheme();

  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const iconColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div className='rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md md:w-full xl:h-[25rem] xl:w-[22rem] items-center'>
      <div
        className={clsxm(
          'flex flex-col h-full my-1 transition-all duration-500 overflow-y-hidden',
          {
            'max-h-0 opacity-0': showDescription,
            'max-h-full opacity-100': !showDescription,
          },
        )}
      >
        <h3 className='mb-2'>{project.title}</h3>

        <div className='text-justify font-light text-sm mb-auto'>
          <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
        </div>

        <div className='flex flex-row mb-3'>
          <IconContext.Provider value={{ color: iconColor, size: '24px' }}>
            {project.tools.map((tool: string) => {
              const IconComponent = iconMapping[tool];
              return (
                IconComponent && (
                  <span key={tool} className='me-1'>
                    <IconComponent />
                  </span>
                )
              );
            })}
          </IconContext.Provider>
        </div>

        <div className='w-full mb-3'>
          <Image
            className='w-full h-auto'
            src={project.image.url}
            alt={project.image.alternativeText || 'Project Image'}
            width={320}
            height={180}
          />
        </div>

        <div className=''>
          {project.longDescription && (
            <Button onClick={toggleDescription}>
              {t('projects.readMore')}
            </Button>
          )}

          {!project.longDescription && (
            <UnstyledLink href=''>{t('projects.readMore')}</UnstyledLink>
          )}
        </div>
      </div>

      <div
        className={clsxm(
          'flex flex-col h-[95%] justify-between mt-4 transition-all duration-500 overflow-y-scroll',
          {
            'max-h-0 opacity-0': !showDescription,
            'max-h-full opacity-100': showDescription,
          },
        )}
      >
        {project.longDescription && (
          <div className='mb-2'>
            <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          </div>
        )}
        <div className='flex w-full justify-end'>
          <Button className='button' onClick={toggleDescription}>
            <RxCross1 size='16px' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

const iconMapping: Record<string, React.ComponentType> = {
  android: DiAndroid,
  angular: FaAngular,
  aws: FaAws,
  bootstrap: FaBootstrap,
  cloud: AiOutlineCloud,
  css: FaCss3Alt,
  csharp: SiCsharp,
  dotnet: SiDotnet,
  firebase: SiFirebase,
  html: FaHtml5,
  ieee: SiIeee,
  java: FaJava,
  javascript: SiJavascript,
  kotlin: TbBrandKotlin,
  nextjs: SiNextdotjs,
  php: FaPhp,
  python: SiPython,
  raspberrypi: FaRaspberryPi,
  react: SiReact,
  typescript: SiTypescript,
  vercel: SiVercel,
};
