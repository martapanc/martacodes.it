import { NextApiRequest, NextApiResponse } from 'next';

import { publicationQuery } from '@/queries/publications';
import { Publication } from '@/sanityTypes/Publication';

import { sanityClient } from '../../../sanity/lib/client';

const publicationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const publications: Publication[] = await sanityClient.fetch(
    publicationQuery
  );

  res.status(200).json(publications);
};

export default publicationsApi;
