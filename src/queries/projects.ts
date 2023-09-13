import { ApolloError, gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { Project, RawProject } from '@/types/Project';

export async function queryProjects() {
  try {
    const { data, errors } = await apolloClient.query({ query: projectsQuery });

    // Check if there are errors
    if (errors) {
      // eslint-disable-next-line no-console
      console.error('GraphQL errors:', errors);
    }

    const projects: Project[] = [];

    if (data) {
      const result: RawProject[] = flattenToArray<RawProject>(data.projects);

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
    }

    return projects;
  } catch (error) {
    if (error instanceof ApolloError) {
      // eslint-disable-next-line no-console
      console.error('Apollo Client Error:', error);
    } else {
      // eslint-disable-next-line no-console
      console.error('An unexpected error occurred:', error);
    }
    return [];
  }
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
