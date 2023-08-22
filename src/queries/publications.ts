import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const publicationQuery = groq`
*[_type == "publication"] | order(sortId asc) {
  _id,
  name,
  title,
  description,
  publisher,
  year,
  "link": file.asset->url
}`;

export const publicationQueryQL = gql`
  query {
    publications(locale: "en", sort: "rank") {
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
