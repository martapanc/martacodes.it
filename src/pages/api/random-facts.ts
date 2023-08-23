import { NextApiRequest, NextApiResponse } from 'next';

import { shuffleArray } from '@/lib/helper';

import { queryRandomFacts } from '@/app/(public)/about/free-time/page';
import {
  falseRandomFactsQueryQL,
  selectedTrueRandomFactsQueryQL,
} from '@/queries/random-facts';

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

export default randomFactsApi;
