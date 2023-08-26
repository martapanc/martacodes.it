import { gql } from '@apollo/client';
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

export const jobsQueryQL = gql`
  query {
    jobs(locale: "en", sort: "startDate:desc") {
      data {
        id
        attributes {
          companyName
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
          title
          location
          description
          startDate
          endDate
          isCurrentJob
          mainColor
          darkColor
          technologies
        }
      }
    }
  }
`;
