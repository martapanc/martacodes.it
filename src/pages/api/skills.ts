// import { parse } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';

import { querySkills } from '@/queries/skills';

import { Skill } from '@/types/Skill';

const skillsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  // const cookies = parse(req.headers.cookie || '');
  // const selectedLanguage = cookies.selectedLanguage || 'en';
  const selectedLanguage = 'en';

  const skills: Skill[] = await querySkills(selectedLanguage);

  res.status(200).json(skills);
};

export default skillsApi;
