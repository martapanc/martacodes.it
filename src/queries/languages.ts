import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_long } from '../../apollo/apollo-client';

import { Language } from '@/types/Language';

export async function queryLanguages() {
  const { data } = await apolloClient.query({
    query: languagesQuery,
    context: context_long,
  });

  return flattenToArray<Language>(data.languages);
}

const languagesQuery = gql`
  query {
    languages(locale: "en") {
      data {
        id
        attributes {
          name
          level
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
        }
      }
    }
  }
`;
