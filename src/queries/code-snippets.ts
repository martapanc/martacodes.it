import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import apolloClient, { context_long } from '../../apollo/apollo-client';

import { CodeSnippet } from '@/types/CodeSnippet';

export async function queryCodeSnippets() {
  const { data } = await apolloClient.query({
    query: codeSnippetsQuery,
    context: context_long,
  });

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
