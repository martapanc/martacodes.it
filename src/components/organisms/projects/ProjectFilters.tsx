'use client';

import * as React from 'react';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';

import clsxm from '@/lib/clsxm';
import {
  CATEGORIES,
  NO_FILTERS,
  isFiltering,
  toolLabel,
  type Category,
  type ProjectFilterState,
} from '@/lib/projectFilters';

import { toolIconMapping } from './Icons';

/** Tools used by only one project sit behind a toggle, to keep the row short. */
const ALWAYS_SHOWN_MIN_COUNT = 2;

interface ProjectFiltersProps {
  filters: ProjectFilterState;
  onChange: (next: ProjectFilterState) => void;
  categoryCounts: Map<Category, number>;
  tools: { tool: string; count: number }[];
  years: { year: string; count: number }[];
  resultCount: number;
  totalCount: number;
}

const Chip = ({
  active,
  onClick,
  label,
  count,
  children,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count?: number;
  children?: React.ReactNode;
}) => (
  <button
    type='button'
    onClick={onClick}
    aria-pressed={active}
    className={clsxm(
      'inline-flex cursor-pointer items-center gap-1.5 rounded-full border px-3 py-1 text-sm transition-colors',
      active
        ? 'border-primary-600 bg-primary-600 text-white dark:border-primary-500 dark:bg-primary-500 dark:text-white'
        : 'border-slate-300 bg-white text-slate-700 hover:border-primary-400 hover:text-primary-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-primary-500 dark:hover:text-primary-300',
    )}
  >
    {children}
    <span>{label}</span>
    {count !== undefined && (
      <span className={clsxm('text-xs', active ? 'text-white/70' : 'text-slate-400 dark:text-slate-500')}>
        {count}
      </span>
    )}
  </button>
);

const ProjectFilters = ({
  filters,
  onChange,
  categoryCounts,
  tools,
  years,
  resultCount,
  totalCount,
}: ProjectFiltersProps) => {
  const [showAllTools, setShowAllTools] = useState(false);

  const toggle = <T extends string>(list: T[], value: T): T[] =>
    list.includes(value) ? list.filter((item) => item !== value) : [...list, value];

  const visibleTools = showAllTools
    ? tools
    : tools.filter(({ count }) => count >= ALWAYS_SHOWN_MIN_COUNT);
  const hiddenToolCount = tools.length - visibleTools.length;

  const active = isFiltering(filters);

  return (
    <div className='mb-10 flex flex-col gap-5'>
      <div className='relative max-w-md'>
        <AiOutlineSearch
          className='pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400'
          size={18}
          aria-hidden
        />
        <input
          type='search'
          value={filters.query}
          onChange={(event) => onChange({ ...filters, query: event.target.value })}
          placeholder='Search projects…'
          aria-label='Search projects'
          className='w-full rounded-full border border-slate-300 bg-white py-2 pl-10 pr-4 text-sm text-slate-800 placeholder:text-slate-400 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:focus:ring-primary-900'
        />
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <span className='mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
          Type
        </span>
        {CATEGORIES.map((category) => (
          <Chip
            key={category}
            label={category}
            count={categoryCounts.get(category) ?? 0}
            active={filters.categories.includes(category)}
            onClick={() =>
              onChange({ ...filters, categories: toggle(filters.categories, category) })
            }
          />
        ))}
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <span className='mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
          Year
        </span>
        {years.map(({ year, count }) => (
          <Chip
            key={year}
            label={year}
            count={count}
            active={filters.years.includes(year)}
            onClick={() => onChange({ ...filters, years: toggle(filters.years, year) })}
          />
        ))}
      </div>

      <div className='flex flex-wrap items-center gap-2'>
        <span className='mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
          Built with
        </span>
        {visibleTools.map(({ tool, count }) => {
          const ToolIcon = toolIconMapping[tool];
          return (
            <Chip
              key={tool}
              label={toolLabel(tool)}
              count={count}
              active={filters.tools.includes(tool)}
              onClick={() => onChange({ ...filters, tools: toggle(filters.tools, tool) })}
            >
              {ToolIcon && (
                <span aria-hidden className='text-base'>
                  <ToolIcon />
                </span>
              )}
            </Chip>
          );
        })}
        {hiddenToolCount > 0 && !showAllTools && (
          <button
            type='button'
            onClick={() => setShowAllTools(true)}
            className='cursor-pointer rounded-full px-2 py-1 text-sm font-medium text-primary-600 hover:underline dark:text-primary-400'
          >
            +{hiddenToolCount} more
          </button>
        )}
      </div>

      <div className='flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400'>
        <span aria-live='polite'>
          {active
            ? `Showing ${resultCount} of ${totalCount} projects`
            : `${totalCount} projects`}
        </span>
        {active && (
          <button
            type='button'
            onClick={() => onChange(NO_FILTERS)}
            className='inline-flex cursor-pointer items-center gap-1 font-medium text-primary-600 hover:underline dark:text-primary-400'
          >
            <RxCross1 size={12} aria-hidden />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectFilters;
