import { NextApiRequest, NextApiResponse } from 'next';

import { selectedTrueRandomFactsQuery } from '@/queries/random-facts';
import { RandomFact } from '@/sanityTypes/RandomFact';

import { sanityClient } from '../../../sanity/lib/client';

const trueFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await sanityClient.fetch(
    selectedTrueRandomFactsQuery
  );

  res.status(200).json(trueFacts);
};

export default trueFactsApi;
