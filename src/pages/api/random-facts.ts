import { DocumentNode } from 'graphql/language';
import { NextApiRequest, NextApiResponse } from 'next';

import { flattenToArray } from '@/lib/graphqlUtils';
import { shuffleArray } from '@/lib/helper';

import {
  falseRandomFactsQueryQL,
  selectedTrueRandomFactsQueryQL,
} from '@/queries/random-facts';

import apolloClient from '../../../apollo/apollo-client';

import { RandomFact } from '@/types/RandomFact';

const randomFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await queryRandomFacts(
    selectedTrueRandomFactsQueryQL
  );

  const falseFacts: RandomFact[] = await queryRandomFacts(
    falseRandomFactsQueryQL
  );

  const oneFalseRandomFact: RandomFact = shuffleArray(falseFacts)[0];

  res.status(200).json({
    true: trueFacts,
    false: falseFacts,
    oneFalse: oneFalseRandomFact,
  });
};

async function queryRandomFacts(query: DocumentNode) {
  const { data } = await apolloClient.query({ query });

  return flattenToArray<RandomFact>(data.randomFacts);
}

export default randomFactsApi;
