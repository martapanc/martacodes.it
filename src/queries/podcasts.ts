import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const podcastsQuery = groq`
*[_type == "podcast"] | order(author asc) {
  _id,
  name,
  author,
  language,
  "cover": cover.asset->url,
  mediaLink,
}`;

export const podcastsQueryQL = gql`
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
