import { groq } from 'next-sanity';

export const homeContentQuery = groq`
*[_type == "homeContent"] {
  _id,
  title,
  threeLineSummary,
  summary0,
  summary1,
  summary2,
  summary3,
  summary4,
}`;
