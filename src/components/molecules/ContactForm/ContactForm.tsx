'use client';

import { Form, Formik } from 'formik';
import { useTheme } from 'next-themes';
import React, { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Trans, useTranslation } from 'react-i18next';
import { toast, ToastContainer } from 'react-toastify';
import * as Yup from 'yup';

import 'react-toastify/dist/ReactToastify.css';

import Button from '@/components/atoms/buttons/Button';

import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './TextArea';

const ContactForm = () => {
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const reCaptchaSiteKey = '6LcSyzAoAAAAAC7JTJ6gtOWW3cjTK_vKRm2WjEtC';

  const { theme } = useTheme();

  async function handleCaptchaSubmission(token: string | null) {
    const res = await fetch('/api/recaptcha', {
      body: JSON.stringify({ token }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { success, error } = await res.json();

    if (success) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
      showError();
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  function showSuccess() {
    toast(t('contacts.success'), {
      type: 'success',
    });
  }

  function showError() {
    toast(
      () => {
        return (
          <>
            <Trans t={t} i18nKey='contacts.error' />
            <a className='ms-1 underline' href='mailto:info@martacodes.it'>
              info@martacodes.it
            </a>
          </>
        );
      },
      {
        autoClose: 10000,
        type: 'error',
      },
    );
  }

  useEffect(() => {}, [isVerified]);

  const { t } = useTranslation();

  const subjects = [
    { key: 'dev', value: 'contacts.subjects.dev' },
    { key: 'work', value: 'contacts.subjects.work' },
    { key: 'recruiter', value: 'contacts.subjects.recruiter' },
    { key: 'feedback', value: 'contacts.subjects.feedback' },
    { key: 'problem', value: 'contacts.subjects.problem' },
    { key: 'general', value: 'contacts.subjects.general' },
    { key: 'other', value: 'contacts.subjects.other' },
  ];

  const validationSchema = Yup.object({
    name: Yup.string().required(t('contacts.fields.name.required')),
    email: Yup.string()
      .email(t('contacts.fields.email.invalid'))
      .required(t('contacts.fields.email.required')),
    subject: Yup.mixed()
      .oneOf(
        subjects.map((subject) => t(subject.value)),
        t('contacts.fields.subject.select'),
      )
      .required(t('contacts.fields.subject.required')),
    message: Yup.string().required(t('contacts.fields.message.required')),
  });

  const handleSubmit = async (
    formValues: Record<string, string>,
    setSubmitting: (arg: boolean) => void,
    resetForm: () => void,
  ) => {
    const json = JSON.stringify(formValues, null, 2);

    const res = await fetch('/api/contacts/send', {
      body: json,
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();

    if (error) {
      showError();
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    showSuccess();
    resetForm();
    recaptchaRef.current?.reset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        company: '',
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
            <Input
              id='name'
              label={t('contacts.fields.name.label')}
              placeholder='Bilbo Baggins'
            />

            <Input
              id='company'
              label={t('contacts.fields.company.label')}
              placeholder='CyberWizards Ltd.'
            />

            <Input
              id='email'
              label={t('contacts.fields.email.label')}
              placeholder='hr@hogwarts.edu'
            />

            <Select
              id='subject'
              label={t('contacts.fields.subject.label')}
              options={subjects}
            />

            <TextArea
              id='message'
              label={t('contacts.fields.message.label')}
              placeholder={t('contacts.fields.message.placeholder')}
            />

            <div className='mt-6 flex justify-end'>
              <ReCAPTCHA
                sitekey={reCaptchaSiteKey}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
              />
            </div>

            <div className='mt-2 flex justify-end'>
              <Button
                type='submit'
                disabled={!isVerified || isSubmitting}
                className='group'
              >
                {isSubmitting
                  ? t('contacts.button.loading')
                  : t('contacts.button.send')}
              </Button>
            </div>

            <ToastContainer
              position='bottom-left'
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme={theme}
            />
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
