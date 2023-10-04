import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_long, getClient } from '../../apollo/apollo-client';

import { Book } from '@/types/Book';

export async function queryBooks() {
  const { data } = await getClient().query({
    query: booksQuery,
    context: context_long,
  });

  return flattenToArray<Book>(data.books);
}

export const booksQuery = gql`
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
