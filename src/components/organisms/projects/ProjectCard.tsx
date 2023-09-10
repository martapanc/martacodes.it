'use client';

import { Button } from '@mui/material';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import * as React from 'react';
import { RefObject, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconContext } from 'react-icons';
import { AiFillGithub, AiOutlineCloud } from 'react-icons/ai';
import { BiNews } from 'react-icons/bi';
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
import { TbBrandKotlin, TbWorldShare } from 'react-icons/tb';
import ReactMarkdown from 'react-markdown';

import UnstyledLink from '@/components/links/UnstyledLink';

import { Project } from '@/types/Project';

export interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();

  const { theme } = useTheme();

  const [showDescription, setShowDescription] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const cardRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    if (cardRef.current && !cardHeight) {
      // Calculate and set the initial height of the card content
      setCardHeight(cardRef.current.offsetHeight);
    }

    window.addEventListener('resize', () => setCardHeight(null));
  }, [cardHeight]);

  const toggleDescription = () => {
    setShowDescription(!showDescription);

    if (!showDescription) {
      // If showing long description, set the card height to the long description's height
      setCardHeight(cardRef.current ? cardRef.current.offsetHeight : null);
    } else {
      // If showing short description, set the card height back to the initial height
      setCardHeight(null);
    }
  };

  const iconColor = theme === 'dark' ? 'white' : 'black';

  return (
    <div
      ref={cardRef}
      className='rounded p-4 shadow-md dark:bg-slate-900 dark:drop-shadow-md'
      style={
        showDescription ? { height: `${cardHeight}px` } : { height: `100%` }
      }
    >
      {!showDescription && (
        <div className='flex flex-col my-1 h-full'>
          <h3 className='mb-2' aria-label='Project title'>
            {project.title}
          </h3>

          <div
            className='text-justify md:font-light md:text-sm mb-auto'
            aria-label='Project short description'
          >
            <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
          </div>

          <div className='flex flex-row mb-3' aria-label='Project tools'>
            <IconContext.Provider value={{ color: iconColor, size: '24px' }}>
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
              className='w-full h-auto'
              src={project.image.url}
              alt={project.image.alternativeText || 'Project Image'}
              width={320}
              height={180}
            />
          </div>

          <div className='flex flex-row justify-between' aria-label='Read More'>
            {project.longDescription && (
              <Button onClick={toggleDescription}>
                {t('projects.readMore')}
              </Button>
            )}

            {!project.longDescription && (
              <UnstyledLink href=''>{t('projects.readMore')}</UnstyledLink>
            )}

            <div className='flex flex-row p-2'>
              <IconContext.Provider value={{ color: iconColor, size: '24px' }}>
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
          </div>
        </div>
      )}

      {showDescription && (
        <div className='flex flex-col justify-between my-1 overflow-y-scroll h-full'>
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
              onClick={toggleDescription}
              aria-label='Close'
            >
              <RxCross1 size='16px' />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;

const toolIconMapping: Record<string, React.ComponentType> = {
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

const linkIconMapping: Record<string, React.ComponentType> = {
  article: BiNews,
  github: AiFillGithub,
  publicUrl: TbWorldShare,
};