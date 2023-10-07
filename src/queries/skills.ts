import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { Skill } from '@/types/Skill';

export async function querySkills(locale: string) {
  const { data } = await apolloClient.query({
    query: skillsQuery(locale),
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
