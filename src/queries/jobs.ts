import { groq } from 'next-sanity';

export const jobsQuery = groq`
*[_type == "job"] | order(endYear desc) {
  _id,
  company,
  "iconUrl": icon.asset->url,
  location,
  jobTitle,
  startYear,
  endYear,
  isCurrentJob,
  description,
  technologies,
  mainColor,
  darkColor,
}`;
