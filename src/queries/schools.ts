import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_1hour, getClient } from '../../apollo/apollo-client';

import { School } from '@/types/School';

export async function querySchools() {
  const { data } = await getClient().query({
    query: schoolsQuery,
    context: context_1hour,
  });

  return flattenToArray<School>(data.schools);
}

const schoolsQuery = gql`
  query {
    schools(locale: "en", sort: "start:DESC") {
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
