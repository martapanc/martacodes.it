import { NextApiRequest, NextApiResponse } from 'next';

import { shuffleArray } from '@/lib/helper';

import {
  falseRandomFactsQuery,
  selectedTrueRandomFactsQuery,
} from '@/queries/random-facts';
import { RandomFact } from '@/sanityTypes/RandomFact';

import { sanityClient } from '../../../sanity/lib/client';

const randomFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await sanityClient.fetch(
    selectedTrueRandomFactsQuery
  );

  const falseFacts: RandomFact[] = await sanityClient.fetch(
    falseRandomFactsQuery
  );

  const oneFalseRandomFact: RandomFact = shuffleArray(falseFacts)[0];

  res.status(200).json({
    true: trueFacts,
    false: falseFacts,
    oneFalse: oneFalseRandomFact,
  });
};

export default randomFactsApi;
