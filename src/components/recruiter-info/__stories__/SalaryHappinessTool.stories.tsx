import { Meta } from '@storybook/react';

import {
  SalaryHappinessProps,
  SalaryHappinessTool,
} from '@/components/recruiter-info/SalaryHappinessTool';

const meta: Meta<typeof SalaryHappinessTool> = {
  title: 'Components/Recruiter-Info/SalaryHappinessTool',
  component: SalaryHappinessTool,
  tags: ['autodocs'],
};

export default meta;

export const SalaryStory = (args: SalaryHappinessProps) => (
  <SalaryHappinessTool {...args} />
);

SalaryStory.storyName = 'Salary';
SalaryStory.args = {
  salaryData: {
    min: 40000,
    median: 80000,
    max: 120000,
  },
};
