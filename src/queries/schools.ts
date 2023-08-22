import { gql } from '@apollo/client';
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

export const schoolsQueryQL = gql`
  query {
    schools(locale: "en", sort: "start:DESC") {
      data {
        id
        attributes {
          schoolName
          degreeName
          degreeUrl
          grade
          start
          end
          description
          flag {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
          icon {
            data {
              id
              attributes {
                name
                url
                alternativeText
              }
            }
          }
        }
      }
    }
  }
`;
