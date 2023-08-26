import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const skillQuery = groq`
*[_type == "skill"] {
  name,
  title,
  description,
  'icons': icons[]-> {
    _id,
    title,
    "url": icon.asset->url
  }
}`;

export const skillQueryQL = gql`
  query {
    skills(locale: "en", sort: "rank") {
      data {
        id
        attributes {
          title
          description
          icons {
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
