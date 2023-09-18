import ReactMarkdown from 'react-markdown';

import '@/components/molecules/RecruiterInfo/recruiterInfo.css';

import Heading from '@/components/atoms/headings/Heading';
import { SalaryHappinessTool } from '@/components/molecules/RecruiterInfo/SalaryHappinessTool';

import { queryRecruitersPage } from '@/queries/recruiters-page';

export const metadata = {
  title: 'Recruiters Info | MartaCodes.it',
  description: 'Information for Recruiters',
};

const queryData = async () => {
  const recruitersPage = await queryRecruitersPage();

  return {
    recruitersPage,
  };
};

const RecruitersPage = async () => {
  const { recruitersPage } = await queryData();

  const salaryData = {
    min: 70000,
    median: 85000,
    max: 120000,
  };

  const config = {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1,
  };

  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <Heading title='recruiters.title' />

          <div
            className='salary-expectations mb-2'
            aria-label='Salary Expectations'
          >
            <h2 className='mb-2'>{recruitersPage.salary.title}</h2>
            <ReactMarkdown>{recruitersPage.salary.content}</ReactMarkdown>

            <SalaryHappinessTool salaryData={salaryData} config={config} />
          </div>

          <hr />

          <div className='tools-techs mb-8'>
            <h2 className='my-4'>{recruitersPage.toolsTechs.title}</h2>
            <ReactMarkdown>{recruitersPage.toolsTechs.content}</ReactMarkdown>
          </div>

          <hr />
        </div>
      </section>
    </main>
  );
};

export default RecruitersPage;
