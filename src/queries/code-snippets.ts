import { gql } from '@apollo/client';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_1hour, getClient } from '../../apollo/apollo-client';

import { CodeSnippet } from '@/types/CodeSnippet';

export async function queryCodeSnippets() {
  const { data } = await getClient().query({
    query: codeSnippetsQuery,
    context: context_1hour,
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
