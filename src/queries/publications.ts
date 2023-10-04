import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_long, getClient } from '../../apollo/apollo-client';

import { Publication } from '@/types/Publication';

export async function queryPublications() {
  const { data } = await getClient().query({
    query: publicationQuery,
    context: context_long,
  });

  return flattenToArray<Publication>(data.publications);
}

const publicationQuery = gql`
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
