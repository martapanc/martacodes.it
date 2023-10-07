import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { RecruitersPage } from '@/types/RecruitersPage';

export async function queryRecruitersPage(locale: string) {
  const { data } = await apolloClient.query({
    query: recruitersPageQuery(locale),
    context: context_short,
  });

  return flattenToObject<RecruitersPage>(data.recruitersPage);
}

export function recruitersPageQuery(locale: string) {
  return gql`
    {
      recruitersPage (locale: "${locale}") {
        data {
          id
          attributes {
            intro
            generalInfo {
              title
              content
            }
            salary {
              title
              content
            }
            toolsTechs {
              title
              content
            }
            jobPreferences {
              title
              content
            }
            tldr {
              title
              content
            }
            outro
          }
        }
      }
    }
  `;
}
