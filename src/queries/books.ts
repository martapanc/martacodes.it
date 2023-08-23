import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const booksQuery = groq`
*[_type == "book"] | order(author asc) {
  _id,
  title,
  author,
  fiction,
  "cover": cover.asset->url,
  goodreadsLink,
}`;

export const booksQueryQL = gql`
  query {
    books(locale: "en", sort: "author:ASC") {
      data {
        id
        attributes {
          title
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
          goodreadsLink
          genre
        }
      }
    }
  }
`;
