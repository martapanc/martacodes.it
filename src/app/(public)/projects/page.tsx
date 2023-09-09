import * as React from 'react';

import ProjectCard from '@/components/organisms/projects/ProjectCard';

import { queryProjects } from '@/queries/projects';

export const metadata = {
  title: 'Projects | MartaCodes.it',
  description: 'Projects page',
};

const queryData = async () => {
  const projects = await queryProjects();

  return {
    projects,
  };
};

const ProjectsPage = async () => {
  const { projects } = await queryData();

  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>Projects</h1>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-5 xl:grid-cols-3'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
