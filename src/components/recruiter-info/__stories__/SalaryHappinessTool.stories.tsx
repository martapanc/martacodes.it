import { Meta, StoryObj } from '@storybook/react';

import SalaryHappinessTool from '@/components/recruiter-info/SalaryHappinessTool';

const meta: Meta<typeof SalaryHappinessTool> = {
  title: 'Components/Recruiter-Info/SalaryHappinessTool',
  component: SalaryHappinessTool,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SalaryHappinessTool>;

export const Euros: Story = {};
