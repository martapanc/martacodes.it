'use client';

import { Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';

import { Input } from '@/components/atoms/Input/Input';
import { Select } from '@/components/atoms/select/Select';
import { TextArea } from '@/components/atoms/TextArea/TextArea';
import Button from '@/components/buttons/Button';

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const subjects = [
    {
      key: 'dev',
      value: '👩🏻‍💻 I need a website / app developed',
    },
    {
      key: 'work',
      value: "🤝 Let's work together on something",
    },
    {
      key: 'recruiter',
      value: "👔 I'm a recruiter and want to hire you",
    },
    {
      key: 'feedback',
      value: "💡 I've got feedback on this website",
    },
    {
      key: 'problem',
      value: '🤕 Reporting a problem',
    },
    {
      key: 'general',
      value: '🙋 General inquiry',
    },
    {
      key: 'other',
      value: '❓ Other',
    },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required("Don't be a stranger :)"),
    email: Yup.string()
      .email(
        'Something seems off with the address you entered 🤔 Please double-check and try again.',
      )
      .required(
        "Required - otherwise it's kinda hard for me to reply to you 🤷‍♀️",
      ),
    subject: Yup.mixed()
      .oneOf(subjects.map((subject) => subject.value))
      .required(
        "Don't leave me hanging! I need a subject to know what's up 🧐",
      ),
    message: Yup.string().required(
      'One does not simply submit a contact form without a message.',
    ),
  });

  const handleSubmit = async (
    formValues: Record<string, string>,
    setSubmitting: (arg: boolean) => void,
    resetForm: () => void,
  ) => {
    // eslint-disable-next-line no-console
    console.log(JSON.stringify(formValues, null, 2));

    setError(false);
    setSuccess(false);

    const res = await fetch('/api/contact/send', {
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      setError(true);
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSuccess(true);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        subject: '',
        message: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleSubmit(values, setSubmitting, resetForm);
      }}
    >
      {({ isSubmitting }) => {
        return (
          <Form role='form' className='mt-4'>
            {success && (
              <div className='rounded-md bg-green-100 px-4 py-2 font-bold text-green-600 ring-1 ring-green-600'>
                Thanks for your message. I will get back to you as soon as
                possible.
              </div>
            )}
            {error && (
              <div className='rounded-md bg-red-100 px-4 py-2 font-bold text-red-600 ring-1 ring-red-600'>
                Whoops, something went wrong on our side! 😟 Please try again -
                if the issue persists, try reaching out directly at
                marta_panc@me.com
              </div>
            )}

            <Input id='name' label='Name' placeholder='Bilbo Baggins' />

            <Input
              id='company'
              label='Company'
              placeholder='CyberWizards Ltd.'
            />

            <Input
              id='email'
              label='Email Address'
              placeholder='hr@hogwarts.edu'
            />

            <Select id='subject' label='Subject' options={subjects} />

            <TextArea
              id='message'
              label='Message'
              placeholder="What's on your mind? The email's the limit! 🪄✨"
            />

            <div className='mt-6 flex justify-end'>
              <Button type='submit' disabled={isSubmitting} className='group'>
                {isSubmitting ? 'Working on it...' : 'Send message'}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
