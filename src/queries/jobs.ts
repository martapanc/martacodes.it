import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { Job } from '@/types/Job';

export async function queryJobs() {
  const { data } = await apolloClient.query({
    query: jobsQuery,
    context: context_short,
  });

  return flattenToArray<Job>(data.jobs);
}

const jobsQuery = gql`
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
