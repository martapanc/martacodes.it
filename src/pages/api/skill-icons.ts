import { NextApiRequest, NextApiResponse } from 'next';

import { skillIconQuery } from '@/queries/skill-icons';

import { sanityClient } from '../../../sanity/lib/client';

import { SkillIcon } from '@/types/SkillIcon';

const skillIconsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const skillIcons: SkillIcon[] = await sanityClient.fetch(skillIconQuery);

  res.status(200).json(skillIcons);
};

export default skillIconsApi;
