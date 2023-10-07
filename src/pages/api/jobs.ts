import { NextApiRequest, NextApiResponse } from 'next';

import { getLocaleFromCookies } from '@/lib/helper';

import { queryJobs } from '@/queries/jobs';

import { Job } from '@/types/Job';

const jobsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromCookies(req);

  console.log('Locale', locale);

  const jobs: Job[] = await queryJobs(locale);

  res.status(200).json(jobs);
};

export default jobsApi;
