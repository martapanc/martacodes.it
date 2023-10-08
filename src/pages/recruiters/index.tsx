import type { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { RecruitersPage } from '@/types/RecruitersPage';

export const getServerSideProps = (async (context) => {
  const res = await fetch(process.env.BASEURL + '/api/recruiters');
  const recruitersPage = await res.json();

  return { props: { recruitersPage } };
}) satisfies GetServerSideProps<{
  recruitersPage: RecruitersPage;
}>;

export default function Recruiters({
  recruitersPage,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <h1>{recruitersPage.intro}</h1>;
}
