import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const shortTextQuery = groq`
*[_type == "shortText"] {
  _id,
  name,
  title,
  content,
  "iconUrl": icon.asset->url
}`;

export const softwareDevIntroQuery = gql`
  query {
    softwareDevelopmentIntro {
      data {
        id
        attributes {
          title
          content
          icon {
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
