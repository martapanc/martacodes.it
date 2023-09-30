import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { getClient } from '../../apollo/apollo-client';

import { Skill } from '@/types/Skill';

export async function querySkills() {
  const { data } = await getClient().query({ query: skillQuery });

  return flattenToArray<Skill>(data.skills);
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
