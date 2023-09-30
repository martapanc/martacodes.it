import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { getClient } from '../../apollo/apollo-client';

import { Language } from '@/types/Language';

export async function queryLanguages() {
  const { data } = await getClient().query({ query: languagesQuery });

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
