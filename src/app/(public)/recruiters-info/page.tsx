import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Pluggable } from 'unified';

import '@/components/molecules/RecruiterInfo/recruiterInfo.css';

import Heading from '@/components/atoms/headings/Heading';
import { SalaryHappinessTool } from '@/components/molecules/RecruiterInfo/SalaryHappinessTool';
import UpdateTimestamp from '@/components/molecules/UpdateTimestamp/UpdateTimestamp';

import { queryRecruitersPage } from '@/queries/recruiters-page';

export const metadata = {
  title: 'Recruiters Info | MartaCodes.it',
  description: 'Information for Recruiters',
  keywords:
    'Marta Pancaldi,Software Engineer,Full-Stack Engineer,Backend Engineer,CV,Resumé,Remote working,WFH',
};

const queryData = async () => {
  const recruitersPage = await queryRecruitersPage('en');

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
        <div className='layout relative flex flex-col py-12 recruiters-info'>
          <Heading title='recruiters.title' />

          <div className='intro mb-2' aria-label='Introduction'>
            <ReactMarkdown>{recruitersPage.intro}</ReactMarkdown>
          </div>

          <div
            className='salary-expectations mb-2'
            aria-label='Salary Expectations'
          >
            <h2 className='my-4'>{recruitersPage.salary.title}</h2>
            <ReactMarkdown>{recruitersPage.salary.content}</ReactMarkdown>

            <SalaryHappinessTool salaryData={salaryData} config={config} />

            <ReactMarkdown
              className='my-4'
              rehypePlugins={[rehypeRaw as Pluggable]}
            >
              {recruitersPage.salary.outro}
            </ReactMarkdown>
          </div>

          <hr />

          <div className='general-info mb-2' aria-label='General Info'>
            <h2 className='my-4'>{recruitersPage.generalInfo.title}</h2>
            <ReactMarkdown>{recruitersPage.generalInfo.content}</ReactMarkdown>
          </div>

          <hr />

          <div className='tools-techs mb-8'>
            <h2 className='my-4'>{recruitersPage.toolsTechs.title}</h2>
            <ReactMarkdown>{recruitersPage.toolsTechs.content}</ReactMarkdown>
          </div>

          <hr />

          <div className='job-preferences mb-8'>
            <h2 className='my-4'>{recruitersPage.jobPreferences.title}</h2>

            <ReactMarkdown rehypePlugins={[rehypeRaw as Pluggable]}>
              {recruitersPage.jobPreferences.content}
            </ReactMarkdown>
          </div>

          <hr />

          <div className='tldr mb-8'>
            <h2 className='my-4'>{recruitersPage.tldr.title}</h2>
            <ReactMarkdown>{recruitersPage.tldr.content}</ReactMarkdown>
          </div>

          <hr />

          <div className='outro mt-8 mb-10'>
            <ReactMarkdown>{recruitersPage.outro}</ReactMarkdown>
          </div>

          <hr />

          <UpdateTimestamp updatedAt={recruitersPage.updatedAt} />
        </div>
      </section>
    </main>
  );
};

export default RecruitersPage;
