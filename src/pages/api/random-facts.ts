import { NextApiRequest, NextApiResponse } from 'next';

import {
  falseRandomFactsQuery,
  trueRandomFactsQuery,
} from '@/queries/random-facts';

import { sanityClient } from '../../../sanity/lib/client';

import { RandomFact } from '@/types/RandomFact';

const randomFactsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const trueFacts: RandomFact[] = await sanityClient.fetch(
    trueRandomFactsQuery
  );

  const falseFacts: RandomFact[] = await sanityClient.fetch(
    falseRandomFactsQuery
  );

  res.status(200).json({
    true: trueFacts,
    false: falseFacts,
  });
};

export default randomFactsApi;
