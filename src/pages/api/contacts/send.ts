import { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, company, email, subject, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  const resendApiKey = process.env.RESEND_API_KEY || '';

  if (!resendApiKey) {
    return res.status(500).json({ error: 'Resend API key is required' });
  }

  const resend = new Resend(resendApiKey);

  try {
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || '',
      subject,
      html: `<div><p>${name} ${company && `@ ${company} `}wrote:</p><p>${message}</p></div>`,
    });
    if (emailError) {
      // eslint-disable-next-line no-console
      console.error('Error sending email:', emailError);
      return res.status(500).json({ error: 'Email could not be sent' });
    }
    // eslint-disable-next-line no-console
    console.log('Email sent:', { emailData });
    return res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Email could not be sent' });
  }
}
