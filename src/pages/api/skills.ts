import { NextApiRequest, NextApiResponse } from 'next';

import { querySkills } from '@/queries/skills';

import { Skill } from '@/types/Skill';

const skillsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const skills: Skill[] = await querySkills();

  res.status(200).json(skills);
};

export default skillsApi;
