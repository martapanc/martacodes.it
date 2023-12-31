import { DocumentNode } from 'graphql/language';
import { NextApiRequest, NextApiResponse } from 'next';

import { flattenToArray } from '@/lib/graphqlUtils';
import { shuffleArray } from '@/lib/helper';

import {
  falseRandomFactsQuery,
  selectedTrueRandomFactsQuery,
} from '@/queries/random-facts';

import apolloClient, { context_short } from '../../../apollo/apollo-client';

import { RandomFact } from '@/types/RandomFact';

const randomFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await queryRandomFacts(
    selectedTrueRandomFactsQuery,
  );

  const falseFacts: RandomFact[] = await queryRandomFacts(
    falseRandomFactsQuery,
  );

  const oneFalseRandomFact: RandomFact = shuffleArray(falseFacts)[0];

  res.status(200).json({
    true: trueFacts,
    false: falseFacts,
    oneFalse: oneFalseRandomFact,
  });
};

async function queryRandomFacts(query: DocumentNode) {
  const { data } = await apolloClient.query({ query, context: context_short });

  return flattenToArray<RandomFact>(data.randomFacts);
}

export default randomFactsApi;
