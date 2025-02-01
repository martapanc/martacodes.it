'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { RxCross1 } from 'react-icons/rx';
import ReactMarkdown from 'react-markdown';

import styles from './projectCard.module.css';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/atoms/links/UnstyledLink';

import { linkIconMapping, toolIconMapping } from './Icons';

import { Project } from '@/types/Project';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  const { theme } = useTheme();

  const [cardHeight, setCardHeight] = useState('100%');
  const cardRef: RefObject<HTMLDivElement> = useRef(null);

  const [activeDiv, setActiveDiv] = useState('first');
  const toggleDiv = () => {
    setActiveDiv(activeDiv === 'first' ? 'second' : 'first');
  };

  const [autoMarginHeight, setAutoMarginHeight] = useState('auto');
  const autoMarginRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      // Calculate and set the initial height of the card content
      setCardHeight(cardRef.current.clientHeight + 'px');
    }

    if (autoMarginRef.current) {
      const computedStyle = window.getComputedStyle(autoMarginRef.current);
      const mbValue = computedStyle.marginBottom;
      const mbNumeric = parseFloat(mbValue);

      setAutoMarginHeight(`${mbNumeric}px`);
    }
  }, []);

  const [iconColor, setIconColor] = useState<string>('');

  useEffect(() => {
    setIconColor(theme === 'dark' ? '#e1e7f2' : '#15295F');
  }, [theme]);

  return (
    <div
      ref={cardRef}
      className='rounded p-4 shadow-md bg-slate-50 dark:bg-slate-900 dark:drop-shadow-md'
      style={{ height: cardHeight }}
    >
      <div
        className={clsxm(
          'flex flex-col my-1',
          activeDiv === 'first' ? styles.show : styles.hide,
        )}
      >
        <h3 className='mb-2' aria-label='Project title'>
          {project.title}
        </h3>

        <div
          ref={autoMarginRef}
          className='text-justify md:font-light md:text-sm'
          aria-label='Project short description'
          style={{ marginBottom: autoMarginHeight }}
        >
          <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
        </div>

        <div
          className='flex flex-row mb-3 justify-start'
          aria-label='Project tools'
        >
          <IconContext.Provider value={{ color: iconColor, size: '1.5em' }}>
            {project.tools.map((tool: string) => {
              const IconComponent = toolIconMapping[tool];
              return (
                IconComponent && (
                  <span key={tool} className='me-1' aria-label={tool}>
                    <IconComponent />
                  </span>
                )
              );
            })}
          </IconContext.Provider>
        </div>

        <div className='w-full mb-3' aria-label='Project image'>
          <Image
            className='w-full h-auto object-cover'
            src={project.image.url}
            alt={project.image.name || 'Project Image'}
            width={320}
            height={180}
          />
        </div>

        <div className='flex flex-row justify-between' aria-label='Read More'>
          <div className='flex flex-row p-2'>
            <IconContext.Provider value={{ color: iconColor, size: '1.5em' }}>
              {Object.entries(project.links).map(([key, url]) => {
                const Icon = linkIconMapping[key];
                return (
                  <UnstyledLink
                    className='me-1'
                    key={key}
                    href={url}
                    aria-label={`${key}-link`}
                  >
                    <Icon />
                  </UnstyledLink>
                );
              })}
            </IconContext.Provider>
          </div>

          {project.longDescription && (
            <Button onClick={toggleDiv}>{t('projects.readMore')}</Button>
          )}

          {!project.longDescription && (
            <UnstyledLink href=''>{t('projects.readMore')}</UnstyledLink>
          )}
        </div>
      </div>

      <div
        className={clsxm(
          'flex flex-col justify-between py-1 overflow-y-scroll',
          activeDiv === 'second' ? styles.show : styles.hide,
        )}
      >
        {project.longDescription && (
          <div
            className='mb-2 text-lg md:text-base'
            aria-label='Project full description'
          >
            <ReactMarkdown>{project.longDescription}</ReactMarkdown>
          </div>
        )}
        <div className='flex w-full justify-end'>
          <Button
            className='button py-2'
            onClick={toggleDiv}
            aria-label='Close'
          >
            <RxCross1 size='16px' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
