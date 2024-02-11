import * as React from 'react';

import Heading from '../atoms/headings/Heading';
import ProjectCard from '../organisms/projects/ProjectCard';
import { Project } from '../../../../martacodes.it-restruct/src/types/Project';

type ProjectsPageProps = {
  projects: Project[];
};

export default function ProjectsPage({ projects }: ProjectsPageProps) {
  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <Heading title='projects.title' />

        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project, id) => (
            <ProjectCard key={id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
