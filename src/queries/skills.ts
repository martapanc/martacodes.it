import { groq } from 'next-sanity';

export const skillQuery = groq`
*[_type == "skill"] {
  name,
  title,
}`;
