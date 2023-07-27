import { Meta } from '@storybook/react';

import GeneralView, {
  GeneralViewProps,
} from '@/components/molecules/RandomFacts/GeneralView';

import { RandomFact } from '@/types/RandomFact';

const meta: Meta<typeof GeneralView> = {
  title: 'Components/Random Facts/General View',
  component: GeneralView,
  tags: ['autodocs'],
};

export default meta;

const facts: RandomFact[] = [
  {
    _id: 'a',
    name: 'name',
    headline: '',
    description:
      'I have been officially excommunicated by the Roman Catholic Church ⛪',
    trueFact: true,
    explanation: '',
  },
];

export const SampleStory = (args: GeneralViewProps) => (
  <GeneralView {...args} />
);
SampleStory.args = {
  facts,
};
