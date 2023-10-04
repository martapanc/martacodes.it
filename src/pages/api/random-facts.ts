import { DocumentNode } from 'graphql/language';
import { NextApiRequest, NextApiResponse } from 'next';

import { flattenToArray } from '@/lib/graphqlUtils';
import { shuffleArray } from '@/lib/helper';

import {
  falseRandomFactsQuery,
  selectedTrueRandomFactsQuery,
} from '@/queries/random-facts';

import { context_1hour, getClient } from '../../../apollo/apollo-client';

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
  const { data } = await getClient().query({ query, context: context_1hour });

  return flattenToArray<RandomFact>(data.randomFacts);
}

export default randomFactsApi;
