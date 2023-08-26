import { NextApiRequest, NextApiResponse } from 'next';

import { queryJobs } from '@/queries/jobs';
import { Job } from '@/sanityTypes/Job';

const jobsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const jobs: Job[] = await queryJobs();

  res.status(200).json(jobs);
};

export default jobsApi;
