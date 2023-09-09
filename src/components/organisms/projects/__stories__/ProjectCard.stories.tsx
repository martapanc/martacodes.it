import { Meta } from '@storybook/react';

import ProjectCard, {
  ProjectCardProps,
} from '@/components/organisms/projects/ProjectCard';

import { Project } from '@/types/Project';

const meta: Meta<typeof ProjectCard> = {
  title: 'Project Card',
  component: ProjectCard,
  tags: ['autodocs'],
};

export default meta;

const project: Project = {
  id: '0',
  title: 'MartaCodes.it',
  image: {
    id: '0',
    name: 'cover',
    url: 'https://mpancaldi.web.app/static/media/website.453e6dfc9313266430d7.webp',
    alternativeText: '',
  },
  shortDescription: 'This very website :)',
  longDescription:
    "Built with ReactJS and later migrated to Typescript, it's also a chance to play around with my web development skills and experiment with front-end technologies.",
  tools: ['nextjs', 'react', 'typescript', 'tailwind', 'strapi', 'vercel'],
  date: '2023-08-01',
  tags: ['react', 'webdev', 'frontend', 'personal', 'typescript'],
  links: {
    github: 'https://github.com/martapanc/react-gh-pages/',
    website: 'https://martacodes.it/',
  },
};

export const SampleStory = (args: ProjectCardProps) => {
  return <ProjectCard {...args} />;
};
SampleStory.args = {
  project,
};
