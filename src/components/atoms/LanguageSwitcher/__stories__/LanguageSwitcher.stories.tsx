import { Meta } from '@storybook/react';

import LanguageSwitcher, {
  LanguageSwitcherProps,
} from '@/components/atoms/LanguageSwitcher/LanguageSwitcher';

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
};

export default meta;

export const SampleStory = (args: LanguageSwitcherProps) => {
  return <LanguageSwitcher {...args} />;
};
