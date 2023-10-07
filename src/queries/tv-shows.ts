import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_long } from '../../apollo/apollo-client';

import { TvShow } from '@/types/TvShow';

export async function queryTvShows() {
  const { data } = await apolloClient.query({
    query: tvShowsQuery,
    context: context_long,
  });

  return flattenToArray<TvShow>(data.tvShows);
}

const tvShowsQuery = gql`
  query {
    tvShows(sort: "year:DESC") {
      data {
        id
        attributes {
          title
          year
          link
          poster {
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
