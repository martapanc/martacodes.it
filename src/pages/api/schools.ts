import { NextApiRequest, NextApiResponse } from 'next';

import { getLocaleFromCookies } from '@/lib/helper';

import { querySchools } from '@/queries/schools';

import { School } from '@/types/School';

const schoolsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromCookies(req);

  const schools: School[] = await querySchools(locale);

  res.status(200).json(schools);
};

export default schoolsApi;
