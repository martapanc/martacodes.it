import { groq } from 'next-sanity';

export const languageQuery = groq`
*[_type == "language"] | order(id asc) {
  _id,
  name,
  level,
  "flagUrl": flag.asset->url
}`;
