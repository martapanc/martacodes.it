import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { Publication } from '@/types/Publication';

export async function queryPublications() {
  const { data } = await apolloClient.query({ query: publicationQueryQL });

  return flattenToArray<Publication>(data.publications);
}

export const publicationQueryQL = gql`
  query {
    publications(locale: "en", sort: "rank") {
      data {
        id
        attributes {
          title
          description
          publisher
          year
          file {
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
