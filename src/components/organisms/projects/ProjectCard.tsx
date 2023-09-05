import { Button } from '@mui/material';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { RxCross1 } from 'react-icons/rx';
import ReactMarkdown from 'react-markdown';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Project, ToolIcon } from '@/types/Project';

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
    <div className='rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md min-w-fit max-w-xs'>
      <div
        className={clsxm('mt-4 transition-all duration-500', {
          'max-h-0 opacity-0': showDescription,
          'max-h-full opacity-100': !showDescription,
        })}
      >
        <h3>{project.title}</h3>

        <div className='text-justify font-light text-sm mb-3'>
          <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
        </div>

        <div className='flex flex-row mb-3'>
          <IconContext.Provider value={{ color: iconColor, size: '24px' }}>
            {project.tools.map((toolIcon: ToolIcon) => (
              <span key={toolIcon.title} className='me-1'>
                <toolIcon.icon />
              </span>
            ))}
          </IconContext.Provider>
        </div>

        <div className='w-full'>
          <Image
            className='object-cover'
            src={project.image.url}
            alt={project.image.alternativeText || 'Project Image'}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
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
        className={clsxm('mt-4 transition-all duration-500', {
          'max-h-0 opacity-0': !showDescription,
          'max-h-full opacity-100': showDescription,
        })}
      >
        <div>{project.longDescription}</div>
        <div>
          <Button onClick={toggleDescription}>
            <RxCross1 />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
