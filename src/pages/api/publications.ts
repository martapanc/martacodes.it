import { NextApiRequest, NextApiResponse } from 'next';

import { publicationQuery } from '@/queries/publications';

import { sanityClient } from '../../../sanity/lib/client';

import { Publication } from '@/types/Publication';

const publicationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const publications: Publication[] = await sanityClient.fetch(
    publicationQuery
  );

  res.status(200).json(publications);
};

export default publicationsApi;
