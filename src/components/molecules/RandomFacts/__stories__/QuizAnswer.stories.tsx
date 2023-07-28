import { Meta } from '@storybook/react';

import { QuizOption } from '@/components/molecules/RandomFacts/Quiz';
import QuizAnswers, {
  QuizAnswersProps,
} from '@/components/molecules/RandomFacts/QuizAnswers';

const meta: Meta<typeof QuizAnswers> = {
  title: 'Components/Random Facts/Quiz Answers',
  component: QuizAnswers,
  tags: ['autodocs'],
};

export default meta;

const answers: QuizOption[] = [
  {
    key: 'a',
    headline:
      'I have been officially excommunicated by the Roman Catholic Church ⛪',
    explanation:
      'That is accurate!\n\nAt a certain point in my life I realised that I no longer agreed with the ' +
      'dictates of the religion I had grown up in, so I decided to declare it to the Church, and was excommunicated ' +
      "as a consequence... I don't brag about it, but it feels good to be consistent :)",
  },
  {
    key: 'b',
    headline: 'I studied oboe at the music school for more than 12 years 🎶',
    explanation:
      "That's correct!\n\nWhen I studied at the music school, I occasionally played for some illustrious " +
      'people - notably, the ex Italian President Giorgio Napolitano, the Nobel prize Dario Fo, the bishop of my hometown, ' +
      'and the singer Luciano Ligabue 🎵 🎸 🎶 🎻. Not so oddly enough, it was usually me who asked them for an autograph, ' +
      "although I was technically the 'star' and they were the audience...",
  },
  {
    key: 'c',
    headline: 'I know flags and capitals of all 195 countries in the world 🇰🇲',
    explanation:
      "Haha, nope... not yet at least, but I'm working on it ;) \n\nI know all 50 States by heart " +
      '(alphabetically and geographically) though, and can probably name most of the 110 Italian towns along with their codes.',
  },
  {
    key: 'd',
    headline:
      'I was an extra-actor in a movie once: "Correspondence" by Giuseppe Tornatore 🎬',
    explanation:
      'Correct! \nI was part of the university students who sat in the conference hall and walked around ' +
      "the uni campus. If you manage to spot me, I promise I'll autograph your t-shirt 😉",
  },
];

export const CorrectAnswerStory = (args: QuizAnswersProps) => (
  <QuizAnswers {...args} />
);
CorrectAnswerStory.args = {
  answers,
  falseOption: 'c',
  answeredCorrectly: true,
};

export const WrongAnswerStory = (args: QuizAnswersProps) => (
  <QuizAnswers {...args} />
);
WrongAnswerStory.args = {
  answers,
  falseOption: 'c',
  answeredCorrectly: false,
};
