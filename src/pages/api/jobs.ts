import { NextApiRequest, NextApiResponse } from 'next';

import { jobsQuery } from '@/queries/jobs';

import { sanityClient } from '../../../sanity/lib/client';

import { Job } from '@/types/Job';

const jobsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs: Job[] = await sanityClient.fetch(jobsQuery);

  res.status(200).json(jobs);
};

export default jobsApi;
