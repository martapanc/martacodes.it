import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { Language } from '@/types/Language';

export async function queryLanguages() {
  const { data } = await apolloClient.query({ query: languagesQueryQL });

  return flattenToArray<Language>(data.languages);
}

export const languagesQueryQL = gql`
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
