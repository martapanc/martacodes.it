import React from 'react';

import readCodeSnippets, { readMarkdown } from '@/lib/markdownUtils';

import homePageData from '@/data/en/home.json';
import projects from '@/data/projects/projects.json';

import HomePage from '@/components/pages/home-page';

import { Project } from '@/types/Project';

export const metadata = {
  title: 'Marta Pancaldi | Martacodes.it',
  description:
    "I'm a software engineer who writes code for work and for fun. I love learning, experimenting with new tech stacks and solving complex problems.",
  keywords:
    'Marta Pancaldi,Software Engineer,Full-Stack Engineer,Backend,Full-Stack,Frontend,Java,React,Angular,Typescript,Python,Kotlin,C#',
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
    homePageData,
    codeSnippets: readCodeSnippets(),
    projects: projectsWithContent,
  };
}

export default async function Page() {
  const { homePageData, codeSnippets, projects } = await getData();
  return (
    <HomePage
      homePage={homePageData}
      codeSnippets={codeSnippets}
      projects={projects}
    />
  );
}
