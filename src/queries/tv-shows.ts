import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const tvSeriesQuery = groq`
*[_type == "tvSeries"] | order(year desc) {
  _id,
  title,
  year,
  "poster": poster.asset->url,
  mediaLink,
}`;

export const tvShowsQueryQL = gql`
  query {
    tvShows(sort: "year:DESC") {
      data {
        id
        attributes {
          title
          year
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
          link
        }
      }
    }
  }
`;
