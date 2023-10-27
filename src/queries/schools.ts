import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { School } from '@/types/School';

export async function querySchools(locale: string) {
  const { data } = await apolloClient.query({
    query: schoolsQuery(locale),
    context: context_short,
  });

  return flattenToArray<School>(data.schools);
}

function schoolsQuery(locale: string) {
  return gql`
    query {
      schools(locale: "${locale}", sort: "end:DESC") {
        data {
          id
          attributes {
            schoolName
            degreeName
            degreeUrl
            grade
            start
            end
            description
            flag {
              data {
                id
                attributes {
                  name
                  url
                  alternativeText
                }
              }
            }
            icon {
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
