import { groq } from 'next-sanity';

export const schoolsQuery = groq`
*[_type == "school"] | order(endYear desc) {
  _id,
  name,
  schoolName,
  "schoolIcon": schoolIcon.asset->url,
  "flagUrl": countryFlag.asset->url,
  degreeName,
  degreeUrl,
  grade,
  startYear,
  endYear,
  description,
}`;
