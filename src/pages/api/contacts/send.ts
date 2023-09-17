import * as sgMail from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, company, email, subject, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email address is required' });
  }

  const sgApiKey = process.env.SENDGRID_API_KEY || '';

  sgMail.setApiKey(sgApiKey);

  const msg = {
    to: 'info@martacodes.it',
    cc: 'marta_panc@me.com',
    from: `${name} ${company ? ' @ ' + company : ''} <marta_panc@me.com>`,
    replyTo: email,
    subject: subject,
    text: message,
    html: `<div><p>${message}</p></div>`,
  };

  try {
    await sgMail.send(msg);
    return res.status(200).json({ message: 'Email sent' });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Email could not be sent' });
  }
}
