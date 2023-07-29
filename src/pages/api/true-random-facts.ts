import { NextApiRequest, NextApiResponse } from 'next';

import { selectedTrueRandomFactsQuery } from '@/queries/random-facts';

import { sanityClient } from '../../../sanity/lib/client';

import { RandomFact } from '@/types/RandomFact';

const trueFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await sanityClient.fetch(
    selectedTrueRandomFactsQuery
  );

  res.status(200).json(trueFacts);
};

export default trueFactsApi;
