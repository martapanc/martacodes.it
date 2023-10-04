import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import { context_short, getClient } from '../../apollo/apollo-client';

import { HomePage } from '@/types/HomePage';

export async function queryHomePage() {
  const { data } = await getClient().query({
    query: homePageQuery,
    context: context_short,
  });

  return flattenToObject<HomePage>(data.homePage);
}

export const homePageQuery = gql`
  query {
    homePage(locale: "en") {
      data {
        id
        attributes {
          greeting
          introduction_1
          introduction_2
          introduction_3
          introduction_4
          introduction_5
        }
      }
    }
  }
`;
