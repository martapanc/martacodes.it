import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import apolloClient, { context_short } from '../../apollo/apollo-client';

import { SoftwareDevIntro } from '@/types/ShortText';

export async function queryIntro() {
  const { data } = await apolloClient.query({
    query: softwareDevIntroQuery,
    context: context_short,
  });

  return flattenToObject<SoftwareDevIntro>(data.softwareDevelopmentIntro);
}

const softwareDevIntroQuery = gql`
  query {
    softwareDevelopmentIntro {
      data {
        id
        attributes {
          title
          content
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
