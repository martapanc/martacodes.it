import { Meta } from '@storybook/react';

import Quiz, {
  Option,
  QuizOption,
  QuizProps,
} from '@/components/molecules/RandomFacts/Quiz';

const meta: Meta<typeof Quiz> = {
  title: 'Components/Random Facts/Quiz',
  component: Quiz,
  tags: ['autodocs'],
};

export default meta;

const options: QuizOption[] = [
  {
    key: Option.A,
    headline:
      'I have been officially excommunicated by the Roman Catholic Church ⛪',
  },
  {
    key: Option.B,
    headline: 'I studied oboe at the music school for more than 12 years 🎶',
  },
  {
    key: Option.C,
    headline: 'I know flags and capitals of all 195 countries in the world 🇰🇲',
  },
  {
    key: Option.D,
    headline:
      'I was an extra-actor in a movie once: "Correspondence" by Giuseppe Tornatore 🎬',
  },
];

export const SampleStory = (args: QuizProps) => <Quiz {...args} />;
SampleStory.args = {
  options,
  falseOption: Option.C,
};
