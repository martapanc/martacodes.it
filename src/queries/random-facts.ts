import { gql } from '@apollo/client';
import { DocumentNode } from 'graphql/language';

import { flattenToArray } from '@/lib/graphqlUtils';

import { context_short, getClient } from '../../apollo/apollo-client';

import { RandomFact } from '@/types/RandomFact';

export async function queryRandomFacts(query: DocumentNode) {
  const { data } = await getClient().query({ query, context: context_short });

  return flattenToArray<RandomFact>(data.randomFacts);
}

export const trueRandomFactsQuery = gql`
  query {
    randomFacts(locale: "en", filters: { isFactTrue: { eq: true } }) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;

export const selectedTrueRandomFactsQuery = gql`
  query {
    randomFacts(
      locale: "en"
      filters: { isFactTrue: { eq: true }, name: { notContains: "(True)" } }
    ) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;

export const falseRandomFactsQuery = gql`
  query {
    randomFacts(locale: "en", filters: { isFactTrue: { eq: false } }) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;
