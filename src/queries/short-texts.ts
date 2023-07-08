import { groq } from 'next-sanity';

export const shortTextQuery = groq`
*[_type == "shortText"] {
  _id,
  name,
  title,
  content,
  "iconUrl": icon.asset->url
}`;
