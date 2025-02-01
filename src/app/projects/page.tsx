import { readMarkdown } from '@/lib/markdownUtils';

import projects from '@/data/projects/projects.json';

import ProjectsPage from '@/components/pages/projects-page';

import { Project } from '@/types/Project';

export const metadata = {
  title: 'Projects | MartaCodes.it',
  description: 'A list of programming (and other) projects I worked on.',
  keywords:
    'Marta Pancaldi,Software Engineer,Full-Stack Engineer,CV,Portfolio,Java,Kotlin,Python,React,Angular,C#,Typescript,Booking.com,Resourcify,BJSS,UniBZ,University of Manchester',
};

async function getData() {
  const projectsWithContent: Project[] = projects;
  projectsWithContent.map((project) => {
    const mdFile = project.longDescription;
    if (mdFile?.includes('.md')) {
      project.longDescription = readMarkdown(`projects/${mdFile}`);
    }
  });
  return {
    projects: projects.filter((project) => !project.wip),
  };
}

export default async function Page() {
  const { projects } = await getData();
  return <ProjectsPage projects={projects} />;
}
