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
