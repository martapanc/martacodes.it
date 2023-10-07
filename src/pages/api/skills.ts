import { NextApiRequest, NextApiResponse } from 'next';

import { getLocaleFromCookies } from '@/lib/helper';

import { querySkills } from '@/queries/skills';

import { Skill } from '@/types/Skill';

const skillsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromCookies(req);

  console.log(locale);

  const skills: Skill[] = await querySkills(locale);

  res.status(200).json(skills);
};

export default skillsApi;
