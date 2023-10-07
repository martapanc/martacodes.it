import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { RecruitersPage } from '@/types/RecruitersPage';

export async function queryRecruitersPage() {
  const { data } = await apolloClient.query({
    query: recruitersPageQuery,
    context: context_short,
  });

  return flattenToObject<RecruitersPage>(data.recruitersPage);
}

export const recruitersPageQuery = gql`
  {
    recruitersPage {
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
