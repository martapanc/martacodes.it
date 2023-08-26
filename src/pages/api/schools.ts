import { NextApiRequest, NextApiResponse } from 'next';

import { querySchools } from '@/queries/schools';
import { School } from '@/sanityTypes/School';

const schoolsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const schools: School[] = await querySchools();

  res.status(200).json(schools);
};

export default schoolsApi;
