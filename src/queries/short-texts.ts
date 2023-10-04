import { gql } from '@apollo/client';

import { flattenToObject } from '@/lib/graphqlUtils';

import { context_1hour, getClient } from '../../apollo/apollo-client';

import { SoftwareDevIntro } from '@/types/ShortText';

export async function queryIntro() {
  const { data } = await getClient().query({
    query: softwareDevIntroQuery,
    context: context_1hour,
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
