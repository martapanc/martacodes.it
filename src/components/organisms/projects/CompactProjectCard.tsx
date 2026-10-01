'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import { LinkIcons, ToolIcons, projectYear } from './ProjectMeta';

import { cloudinaryWidth } from '@/lib/cloudinary';

import type { Project } from '@/types/Project';

interface CompactProjectCardProps {
  project: Project;
  onReadMore: (project: Project) => void;
}

/** The card is at most ~400px wide; 2x covers high-DPI displays. */
const IMAGE_WIDTH = 800;

const CompactProjectCard = ({ project, onReadMore }: CompactProjectCardProps) => (
  <article className='group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition-colors hover:border-primary-300 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-primary-700'>
    {/* A slim version of the featured cards' image header: full bleed, no fade,
        and a fixed height rather than a ratio, so strips line up across a row
        whatever the length of each card's text. Decorative – the dialog shows
        the same image with its alt text. */}
    {project.image?.url && (
      <div className='h-20 shrink-0 overflow-hidden bg-slate-200 dark:bg-slate-800'>
        <img
          src={cloudinaryWidth(project.image.url, IMAGE_WIDTH)}
          alt=''
          aria-hidden='true'
          loading='lazy'
          decoding='async'
          className='h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105'
        />
      </div>
    )}

    <div className='flex flex-1 flex-col p-4'>
      <div className='mb-2 flex items-baseline justify-between gap-3'>
        <h3 className='text-base'>{project.title}</h3>
        <span className='shrink-0 font-mono text-xs text-slate-500 dark:text-slate-400'>
          {projectYear(project.date)}
        </span>
      </div>

      <div className='mb-4 text-sm font-light text-slate-600 dark:text-slate-400'>
        <ReactMarkdown>{project.shortDescription}</ReactMarkdown>
      </div>

      <div className='mt-auto flex flex-wrap items-center justify-between gap-3'>
        <ToolIcons tools={project.tools} size='1.15em' />
        <div className='flex items-center gap-3'>
          <LinkIcons links={project.links} size='1.15em' />
          {project.longDescription && (
            <button
              type='button'
              onClick={() => onReadMore(project)}
              className='cursor-pointer text-sm font-medium text-primary-600 hover:underline dark:text-primary-400'
            >
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  </article>
);

export default CompactProjectCard;
