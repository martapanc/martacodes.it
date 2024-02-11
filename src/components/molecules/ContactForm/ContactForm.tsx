'use client';

import { Form, Formik } from 'formik';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { Trans, useTranslation } from 'react-i18next';
import * as Yup from 'yup';

import { Input } from './Input';
import { Select } from './Select';
import { TextArea } from './TextArea';
import Button from '../../atoms/buttons/Button';
import { verifyCaptcha } from '../../../lib/verifyCaptcha';

export interface ContactFormProps {
  subjects: Subject[];
}

export interface Subject {
  key: string;
  value: string;
}

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  const reCaptchaSiteKey = '6LcSyzAoAAAAAC7JTJ6gtOWW3cjTK_vKRm2WjEtC';

  async function handleCaptchaSubmission(token: string | null) {
    // Server function to verify captcha
    await verifyCaptcha(token)
      .then(() => {
        setIsVerified(true);
      })
      .catch(() => {
        setIsVerified(false);
        setError(true);
      });
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

    setError(false);
    setSuccess(false);

    const res = await fetch('/api/contacts/send', {
      body: json,
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
            {success && (
              <div className='rounded-md bg-green-100 px-4 py-2 text-green-600 ring-1 ring-green-600 font-semibold'>
                {t('contacts.success')}
              </div>
            )}
            {error && (
              <div className='rounded-md bg-red-100 px-4 py-2 text-red-600 ring-1 ring-red-600 font-semibold'>
                <Trans t={t} i18nKey='contacts.error' />
                <a className='ms-1 underline' href='mailto:info@martacodes.it'>
                  info@martacodes.it
                </a>
              </div>
            )}

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
          </Form>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
