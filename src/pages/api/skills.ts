import { NextApiRequest, NextApiResponse } from 'next';

import { skillQuery } from '@/queries/skills';
import { Skill } from '@/sanityTypes/Skill';

import { sanityClient } from '../../../sanity/lib/client';

const skillsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const skills: Skill[] = await sanityClient.fetch(skillQuery);

  res.status(200).json(skills);
};

export default skillsApi;
