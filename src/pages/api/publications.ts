import { NextApiRequest, NextApiResponse } from 'next';

import { queryPublications } from '@/queries/publications';

import { Publication } from '@/types/Publication';

const publicationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const publications: Publication[] = await queryPublications();

  res.status(200).json(publications);
};

export default publicationsApi;
