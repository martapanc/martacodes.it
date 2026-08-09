'use client';

import * as React from 'react';
import { useEffect, useRef } from 'react';
import { RxCross1 } from 'react-icons/rx';
import ReactMarkdown from 'react-markdown';

import SkillIconList from './SkillIconList';

import type { Skill } from '@/types/Skill';

interface SkillDialogProps {
  skill: Skill | null;
  onClose: () => void;
}

/**
 * Same native <dialog> approach as ProjectDialog – focus trapping, Esc, the
 * backdrop and page inertness all come from the platform.
 */
const SkillDialog = ({ skill, onClose }: SkillDialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;

    if (skill && !dialog.open) {
      dialog.showModal();
    } else if (!skill && dialog.open) {
      dialog.close();
    }
  }, [skill]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => {
        if (event.target === ref.current) onClose();
      }}
      className='m-auto w-[min(40rem,92vw)] rounded-xl bg-white p-0 text-slate-800 shadow-2xl backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm dark:bg-slate-900 dark:text-slate-200'
    >
      {skill && (
        <div className='max-h-[85vh] overflow-y-auto'>
          <div className='sticky top-0 flex items-start justify-between gap-4 border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur dark:border-slate-800 dark:bg-slate-900/95'>
            <h2 className='text-xl'>{skill.title}</h2>
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
            <div className='text-sm leading-relaxed [&_a]:text-primary-600 [&_a]:underline dark:[&_a]:text-primary-400 [&_li]:mb-1 [&_p]:mb-4 [&_p:last-child]:mb-0 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-5'>
              <ReactMarkdown>{skill.description}</ReactMarkdown>
            </div>

            <div className='mt-6 border-t border-slate-200 pt-4 dark:border-slate-800'>
              <SkillIconList icons={skill.icons} size={30} />
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
};

export default SkillDialog;
