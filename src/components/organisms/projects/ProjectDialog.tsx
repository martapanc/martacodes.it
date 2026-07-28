'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { RxCross1 } from 'react-icons/rx';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import { cloudinaryWidth } from '@/lib/cloudinary';

import { LinkIcons, ToolIcons, projectYear } from './ProjectMeta';

import type { Project } from '@/types/Project';

/** Roughly 2x the dialog's rendered image width, for high-DPI displays. */
const DIALOG_IMAGE_WIDTH = 1400;

interface ProjectDialogProps {
  project: Project | null;
  onClose: () => void;
}

/**
 * Uses a native <dialog> so focus trapping, Esc-to-close, inertness of the page
 * behind, and the backdrop all come from the platform. The cards previously
 * swapped the long description in place, which forced them to measure their own
 * clientHeight and pin a fixed pixel height to stop the grid reflowing.
 */
const ProjectDialog = ({ project, onClose }: ProjectDialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (project && !dialog.open) {
      dialog.showModal();
    } else if (!project && dialog.open) {
      dialog.close();
    }
  }, [project]);

  return (
    <dialog
      ref={ref}
      // Fires for Esc and form-method=dialog too, so state stays in sync
      // however the dialog was dismissed.
      onClose={onClose}
      // A click landing on the dialog element itself is a click on the
      // backdrop — anything inside hits a child instead.
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className='m-auto w-[min(46rem,92vw)] rounded-xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm dark:bg-slate-900 dark:text-slate-200'
    >
      {project && (
        <div className='max-h-[85vh] overflow-y-auto'>
          <div className='sticky top-0 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95'>
            <div>
              <h2 className='text-xl'>{project.title}</h2>
              <p className='mt-0.5 font-mono text-sm text-slate-500 dark:text-slate-400'>
                {projectYear(project.date)}
              </p>
            </div>
            <button
              type='button'
              onClick={onClose}
              aria-label='Close'
              className='shrink-0 cursor-pointer rounded p-2 text-slate-500 transition-colors hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800'
            >
              <RxCross1 size={16} />
            </button>
          </div>

          <div className='px-6 py-5'>
            <img
              src={cloudinaryWidth(project.image.url, DIALOG_IMAGE_WIDTH)}
              alt={project.image.name || project.title}
              width={1400}
              height={760}
              className='mb-5 w-full rounded-lg object-cover'
            />

            <div className='text-sm leading-relaxed [&_a]:text-primary-600 [&_a]:underline dark:[&_a]:text-primary-400 [&_h2]:mb-2 [&_h2]:mt-5 [&_h2]:text-lg [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-base [&_img]:my-4 [&_img]:rounded-lg [&_li]:mb-1 [&_ol]:mb-4 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-4 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5'>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {project.longDescription ?? project.mediumDescription ?? project.shortDescription}
              </ReactMarkdown>
            </div>

            <div className='mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-4 dark:border-slate-800'>
              <ToolIcons tools={project.tools} size='1.4em' />
              <LinkIcons links={project.links} size='1.4em' />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default ProjectDialog;
