import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { Project, RawProject } from '@/types/Project';

export async function queryProjects() {
  const { data } = await apolloClient.query({ query: projectsQuery });

  const result: RawProject[] = flattenToArray<RawProject>(data.projects);
  const projects: Project[] = [];

  result.map((entry) => {
    const project: Project = {
      id: entry.id,
      title: entry.title,
      image: entry.image,
      shortDescription: entry.shortDescription,
      longDescription: entry.longDescription,
      tools: entry.tools.split(','),
      date: entry.date,
      tags: entry.tags.split(','),
      links: entry.links,
    };
    projects.push(project);
  });

  return projects;
}

const projectsQuery = gql`
  query {
    projects(locale: "en", sort: "date:desc") {
      data {
        id
        attributes {
          title
          image {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
          shortDescription
          longDescription
          date
          tools
          tags
          links
        }
      }
    }
  }
`;
