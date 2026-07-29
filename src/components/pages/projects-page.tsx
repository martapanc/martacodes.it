import * as React from 'react';
import { useMemo, useState } from 'react';

import Heading from '@/components/atoms/headings/Heading';
import CompactProjectCard from '@/components/organisms/projects/CompactProjectCard';
import FeaturedProjectCard from '@/components/organisms/projects/FeaturedProjectCard';
import ProjectDialog from '@/components/organisms/projects/ProjectDialog';
import ProjectFilters from '@/components/organisms/projects/ProjectFilters';
import {
  NO_FILTERS,
  categoryCounts,
  isFiltering,
  matchesFilters,
  toolsByFrequency,
  yearsByRecency,
  type ProjectFilterState,
} from '@/lib/projectFilters';

import type { Project } from '@/types/Project';

type ProjectsPageProps = {
  projects: Project[];
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  const [filters, setFilters] = useState<ProjectFilterState>(NO_FILTERS);
  const [openProject, setOpenProject] = useState<Project | null>(null);

  // Counts come from the full set, not the filtered one, so the chips keep
  // showing how much is behind each option rather than collapsing to 0 as you
  // narrow down.
  const facets = useMemo(
    () => ({
      categories: categoryCounts(projects),
      tools: toolsByFrequency(projects),
      years: yearsByRecency(projects),
    }),
    [projects],
  );

  const { featured, rest, matchCount } = useMemo(() => {
    const matching = projects.filter((project) => matchesFilters(project, filters));
    return {
      featured: matching.filter((project) => project.featured),
      rest: matching.filter((project) => !project.featured),
      matchCount: matching.length,
    };
  }, [projects, filters]);

  const filtering = isFiltering(filters);

  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='Projects' />

        <ProjectFilters
          filters={filters}
          onChange={setFilters}
          categoryCounts={facets.categories}
          tools={facets.tools}
          years={facets.years}
          resultCount={matchCount}
          totalCount={projects.length}
        />

        {featured.length > 0 && (
          <>
            {/* The label only earns its space when there is a second group to
                contrast against – filtering often leaves just one. */}
            {rest.length > 0 && (
              <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
                Featured
              </h2>
            )}
            <div className='mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3' data-reveal-group>
              {featured.map((project) => (
                <FeaturedProjectCard
                  key={project.title}
                  project={project}
                  onReadMore={setOpenProject}
                />
              ))}
            </div>
          </>
        )}

        {rest.length > 0 && (
          <>
            {featured.length > 0 && (
              <h2 className='mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400'>
                {filtering ? 'More matches' : 'Everything else'}
              </h2>
            )}
            <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3' data-reveal-group>
              {rest.map((project) => (
                <CompactProjectCard
                  key={project.title}
                  project={project}
                  onReadMore={setOpenProject}
                />
              ))}
            </div>
          </>
        )}

        {matchCount === 0 && (
          <div className='rounded-lg border border-dashed border-slate-300 py-16 text-center dark:border-slate-700'>
            <p className='text-slate-600 dark:text-slate-400'>
              No projects match those filters.
            </p>
            <button
              type='button'
              onClick={() => setFilters(NO_FILTERS)}
              className='mt-2 cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-400'
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      <ProjectDialog project={openProject} onClose={() => setOpenProject(null)} />
    </section>
  );
}
