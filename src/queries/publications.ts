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
