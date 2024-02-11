import React from 'react';

import readCodeSnippets from '@/lib/markdownUtils';

import homePageData from '@/data/en/home.json';

import HomePage from '@/components/pages/home-page';

export const metadata = {
  title: 'Marta Pancaldi | Martacodes.it',
  description:
    "I'm a software engineer who writes code for work and for fun. I love learning, experimenting with new tech stacks and solving complex problems.",
  keywords:
    'Marta Pancaldi,Software Engineer,Full-Stack Engineer,Backend,Full-Stack,Frontend,Java,React,Angular,Typescript,Python,Kotlin,C#',
};

async function getData() {
  return {
    homePageData,
    codeSnippets: readCodeSnippets(),
  };
}

export default async function Page() {
  const { homePageData, codeSnippets } = await getData();
  return <HomePage homePage={homePageData} codeSnippets={codeSnippets} />;
}
