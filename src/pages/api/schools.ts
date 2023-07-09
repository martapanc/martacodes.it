import { NextApiRequest, NextApiResponse } from 'next';

import { schoolsQuery } from '@/queries/schools';

import { sanityClient } from '../../../sanity/lib/client';

import { School } from '@/types/School';

const schoolsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const schools: School[] = await sanityClient.fetch(schoolsQuery);

  res.status(200).json(schools);
};

export default schoolsApi;
