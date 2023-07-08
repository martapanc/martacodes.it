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
