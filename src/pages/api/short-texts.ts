import { NextApiRequest, NextApiResponse } from 'next';

import { shortTextQuery } from '@/queries/short-texts';
import { ShortText } from '@/sanityTypes/ShortText';

import { sanityClient } from '../../../sanity/lib/client';

const shortTextsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const shortTexts: ShortText[] = await sanityClient.fetch(shortTextQuery);

  res.status(200).json(shortTexts);
};

export default shortTextsApi;
