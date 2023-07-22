import { groq } from 'next-sanity';

export const skillIconQuery = groq`
*[_type == "skillIcon"]`;
