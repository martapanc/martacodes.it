'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { LinkIcons, ToolIcons, projectYear } from './ProjectMeta';

import type { Project } from '@/types/Project';

interface FeaturedProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

const FeaturedProjectCard = ({ project, onReadMore }: FeaturedProjectCardProps) => (
  <article className='group flex flex-col overflow-hidden rounded-xl bg-slate-50 shadow-md transition-shadow hover:shadow-xl dark:bg-slate-900 dark:shadow-slate-950/50'>
    <div className='aspect-[648/352] overflow-hidden bg-slate-200 dark:bg-slate-800'>
      <img
        src={project.image.url}
        alt={project.image.name || project.title}
        width={648}
        height={352}
        loading='lazy'
        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105'
      />
    </div>

    <div className='flex flex-1 flex-col p-5'>
      <div className='mb-2 flex items-baseline justify-between gap-3'>
        <h3 className='text-lg'>{project.title}</h3>
        <span className='shrink-0 font-mono text-sm text-slate-500 dark:text-slate-400'>
          {projectYear(project.date)}
        </span>
      </div>

      {/* mediumDescription contains inline HTML links, hence rehypeRaw */}
      <div className='mb-4 text-sm text-slate-700 md:font-light dark:text-slate-300'>
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {project.mediumDescription ?? project.shortDescription}
        </ReactMarkdown>
      </div>

      <div className='mt-auto flex flex-wrap items-center justify-between gap-3 pt-2'>
        <ToolIcons tools={project.tools} size='1.4em' />
        <div className='flex items-center gap-4'>
          <LinkIcons links={project.links} size='1.4em' />
          {project.longDescription && (
            <button
              type='button'
              onClick={() => onReadMore(project)}
              className='cursor-pointer rounded px-3 py-1 text-sm font-medium text-primary-600 transition-colors hover:bg-primary-50 dark:text-primary-400 dark:hover:bg-slate-800'
            >
              Read more
            </button>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default FeaturedProjectCard;
