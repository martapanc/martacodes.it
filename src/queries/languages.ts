import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const languageQuery = groq`
*[_type == "language"] | order(id asc) {
  _id,
  name,
  level,
  "flagUrl": flag.asset->url
}`;

export const languagesQueryQL = gql`
  query {
    languages(locale: "en") {
      data {
        attributes {
          name
          level
          flag {
            data {
              attributes {
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
