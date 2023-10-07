import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_long } from '../../apollo/apollo-client';

import { Publication } from '@/types/Publication';

export async function queryPublications(locale: string) {
  const { data } = await apolloClient.query({
    query: publicationsQuery(locale),
    context: context_long,
  });

  return flattenToArray<Publication>(data.publications);
}

function publicationsQuery(locale: string) {
  return gql`
    query {
      publications(locale: "${locale}", sort: "rank") {
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
}
