import { readMarkdownData } from '@/lib/markdownUtils';

import RecruitersPage from '@/components/pages/recruiters-page';

export const metadata = {
  title: 'Recruiters Info | MartaCodes.it',
  description: 'Information for Recruiters',
  keywords:
    'Marta Pancaldi,Software Engineer,Full-Stack Engineer,Backend Engineer,CV,Resumé,Remote working,WFH',
};

async function getData() {
  const recruitersData = readMarkdownData('recruiters');
  return {
    recruitersData,
  };
}

export default async function Page() {
  const { recruitersData } = await getData();
  return <RecruitersPage recruitersData={recruitersData} />;
}
