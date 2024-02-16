'use client';

import * as React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import styles from '@/styles/modules/recruiters.module.css';

import clsxm from '@/lib/clsxm';
import { isWindowsOS } from '@/lib/helper';

import Heading from '@/components/atoms/headings/Heading';
import { SalaryHappinessTool } from '@/components/molecules/RecruiterInfo/SalaryHappinessTool';
import UpdateTimestamp from '@/components/molecules/UpdateTimestamp/UpdateTimestamp';

import { MarkdownData } from '@/types/Markdown';

type RecruitersPageProps = {
  recruitersData: MarkdownData;
};

function removeFlagEmojisIfWindowsOS(inputText: string): string {
  if (typeof window !== 'undefined' && isWindowsOS(window.navigator)) {
    return inputText
      .replaceAll('🇪🇺', ' ')
      .replaceAll('🇮🇹', '🍕')
      .replaceAll('🇬🇧', ' ');
  }
  return inputText;
}

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
          rehypePlugins={[rehypeRaw]}
        >
          {recruitersData.markdownSections[0].content}
        </ReactMarkdown>

        <SalaryHappinessTool salaryData={salaryData} config={config} />

        <ReactMarkdown
          className={clsxm(styles['recruiters-info'], 'mb-4')}
          rehypePlugins={[rehypeRaw]}
        >
          {removeFlagEmojisIfWindowsOS(
            recruitersData.markdownSections[1].content,
          )}
        </ReactMarkdown>

        <hr />

        <UpdateTimestamp updatedAt={recruitersData.latestEditTimestamp} />
      </div>
    </section>
  );
}
