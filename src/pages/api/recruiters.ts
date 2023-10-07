import { NextApiRequest, NextApiResponse } from 'next';

import { getLocaleFromCookies } from '@/lib/helper';

import { queryRecruitersPage } from '@/queries/recruiters-page';

import { RecruitersPage } from '@/types/RecruitersPage';

const recruitersApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const locale = getLocaleFromCookies(req);

  console.log('Locale', locale);

  const recruitersPage: RecruitersPage = await queryRecruitersPage(locale);

  res.status(200).json(recruitersPage);
};

export default recruitersApi;
