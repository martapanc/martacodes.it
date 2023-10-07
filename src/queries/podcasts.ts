import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_long } from '../../apollo/apollo-client';

import { Podcast } from '@/types/Podcast';

export async function queryPodcasts() {
  const { data } = await apolloClient.query({
    query: podcastsQuery,
    context: context_long,
  });

  return flattenToArray<Podcast>(data.podcasts);
}

const podcastsQuery = gql`
  query {
    podcasts(sort: "author:ASC") {
      data {
        id
        attributes {
          name
          author
          cover {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
          mediaLink
          language
        }
      }
    }
  }
`;
