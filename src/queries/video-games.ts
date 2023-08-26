import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { VideoGame } from '@/types/VideoGame';

export async function queryVideoGames() {
  const { data } = await apolloClient.query({ query: videoGamesQuery });

  return flattenToArray<VideoGame>(data.videoGames);
}

const videoGamesQuery = gql`
  query {
    videoGames(sort: "year:DESC") {
      data {
        id
        attributes {
          title
          year
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
          link
        }
      }
    }
  }
`;
