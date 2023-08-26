import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { Job } from '@/types/Job';

export async function queryJobs() {
  const { data } = await apolloClient.query({ query: jobsQueryQL });

  return flattenToArray<Job>(data.jobs);
}

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
