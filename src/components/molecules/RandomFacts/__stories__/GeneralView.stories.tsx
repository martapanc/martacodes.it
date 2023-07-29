import { Meta } from '@storybook/react';
import { useEffect, useState } from 'react';

import { shuffleArray } from '@/lib/helper';

import GeneralView, {
  GeneralViewProps,
} from '@/components/molecules/RandomFacts/GeneralView';

import { trueRandomFactsQuery } from '@/queries/random-facts';

import { sanityClient } from '../../../../../sanity/lib/client';

import { RandomFact } from '@/types/RandomFact';

const meta: Meta<typeof GeneralView> = {
  title: 'Components/Random Facts/General View',
  component: GeneralView,
  tags: ['autodocs'],
};

export default meta;

export const SampleStory = (args: GeneralViewProps) => {
  const [randomFacts, setRandomFacts] = useState<RandomFact[]>([]);

  useEffect(() => {
    const fetchFacts = async () => {
      try {
        const randomFactsData = await sanityClient.fetch(trueRandomFactsQuery);

        setRandomFacts(shuffleArray(randomFactsData));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error fetching randomFacts:', error);
      }
    };

    fetchFacts();
  }, []);

  return (
    <>
      {randomFacts.length > 0 && (
        <GeneralView {...args} randomFacts={randomFacts} />
      )}
    </>
  );
};