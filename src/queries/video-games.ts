import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const videoGamesQuery = groq`
*[_type == "videoGame"] | order(year desc) {
  _id,
  title,
  year,
  "cover": cover.asset->url,
  mediaLink,
}`;

export const videoGamesQueryQL = gql`
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
