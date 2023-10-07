import { NextApiRequest, NextApiResponse } from 'next';

import { getLocaleFromCookies } from '@/lib/helper';

import { queryPublications } from '@/queries/publications';

import { Publication } from '@/types/Publication';

const publicationsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromCookies(req);

  const publications: Publication[] = await queryPublications(locale);

  res.status(200).json(publications);
};

export default publicationsApi;
