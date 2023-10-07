'use server';

import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_short, getClient } from '../../apollo/apollo-client';

import { Skill } from '@/types/Skill';

export async function querySkills(locale?: string) {
  const lang = locale || 'en';

  const { data } = await getClient().query({
    query: skillQuery,
    context: context_short,
  });

  return flattenToArray<Skill>(data.skills);
}

function skillsQuery(locale: string) {
  return gql`
    query {
      skills(locale: "${locale}", sort: "rank") {
        data {
          id
          attributes {
            title
            description
            icons {
              data {
                id
                attributes {
                  name
                  url
                  alternativeText
                }
              }
            }
          }
        }
      }
    }
  `;
}

const skillQuery = gql`
  query {
    skills(locale: "en", sort: "rank") {
      data {
        id
        attributes {
          title
          description
          icons {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
