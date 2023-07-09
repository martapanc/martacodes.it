import { groq } from 'next-sanity';

export const jobsQuery = groq`
*[_type == "job"] | order(endDate desc) {
  _id,
  company,
  "iconUrl": icon.asset->url,
  location,
  jobTitle,
  startDate,
  endDate,
  isCurrentJob,
  description,
  technologies,
  mainColor,
  darkColor,
}`;
