import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import { getClient } from '../../apollo/apollo-client';

import { UsesPage } from '@/types/UsesPage';

export async function queryUsesPage() {
  const { data } = await getClient().query({ query: UsesPageQuery });

  return flattenToObject<UsesPage>(data.usesPage);
}

export const UsesPageQuery = gql`
  {
    usesPage {
      data {
        id
        attributes {
          hardware {
            title
            content
          }
          programmingTools {
            title
            content
          }
          productivity {
            title
            content
          }
          media {
            title
            content
          }
          security {
            title
            content
          }
        }
      }
    }
  }
`;
