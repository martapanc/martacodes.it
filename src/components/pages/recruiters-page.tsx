import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Pluggable } from 'unified';

import styles from '../../../../martacodes.it-restruct/src/styles/modules/recruiters.module.css';

import Heading from '../atoms/headings/Heading';
import { SalaryHappinessTool } from '../molecules/RecruiterInfo/SalaryHappinessTool';
import UpdateTimestamp from '../molecules/UpdateTimestamp/UpdateTimestamp';
import clsxm from '../../lib/clsxm';
import { MarkdownData } from '../../../../martacodes.it-restruct/src/types/Markdown';

type RecruitersPageProps = {
  recruitersData: MarkdownData;
};

export default function RecruitersPage({
  recruitersData,
}: RecruitersPageProps) {
  const salaryData = {
    min: 110000,
    median: 130000,
    max: 150000,
  };

  const config = {
    displayTitle: true,
    currency: 'EUR',
    forexMultiplier: 1,
  };

  return (
    <section>
      <div className='layout relative flex flex-col py-12 recruiters-info'>
        <Heading title='recruiters.title' />

        <ReactMarkdown
          className={clsxm(styles['recruiters-info'], 'mb-2')}
          rehypePlugins={[rehypeRaw as Pluggable]}
        >
          {recruitersData.markdownSections[0].content}
        </ReactMarkdown>

        <SalaryHappinessTool salaryData={salaryData} config={config} />

        <ReactMarkdown
          className={clsxm(styles['recruiters-info'], 'mb-4')}
          rehypePlugins={[rehypeRaw as Pluggable]}
        >
          {recruitersData.markdownSections[1].content}
        </ReactMarkdown>

        <hr />

        <UpdateTimestamp updatedAt={recruitersData.latestEditTimestamp} />
      </div>
    </section>
  );
}
