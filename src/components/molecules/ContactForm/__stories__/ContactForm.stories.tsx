import { Meta } from '@storybook/react';

import ContactForm from '@/components/molecules/ContactForm/ContactForm';

const meta: Meta<typeof ContactForm> = {
  title: 'ContactForm',
  component: ContactForm,
  tags: ['autodocs'],
};

export default meta;

export const SampleStory = () => {
  return <ContactForm />;
};
