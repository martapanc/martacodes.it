import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { HomePage } from '@/types/HomePage';

export async function queryHomePage() {
  const { data } = await apolloClient.query({ query: homePageQuery });

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
