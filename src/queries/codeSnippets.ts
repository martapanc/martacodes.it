import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient from '../../apollo/apollo-client';

import { CodeSnippet } from '@/types/CodeSnippet';

export async function queryCodeSnippets() {
  const { data } = await apolloClient.query({ query: codeSnippetsQuery });

  return flattenToArray<CodeSnippet>(data.codeSnippets);
}

const codeSnippetsQuery = gql`
  query {
    codeSnippets {
      data {
        id
        attributes {
          language
          code
        }
      }
    }
  }
`;
