import { NextApiRequest, NextApiResponse } from 'next';

import { homeContentQuery } from '@/queries/homeContent';
import { HomeContent } from '@/sanityTypes/HomeContent';

import { sanityClient } from '../../../sanity/lib/client';

const homeApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const homeContent: HomeContent = await sanityClient.fetch(homeContentQuery);

  res.status(200).json({
    home: homeContent,
  });
};

export default homeApi;
