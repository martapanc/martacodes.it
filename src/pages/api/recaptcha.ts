import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Error providing ReCaptcha token' });
  }

  const key = process.env.RECAPTCHA_SECRET_KEY;

  if (!key) {
    return res
      .status(500)
      .json({ error: 'Error retrieving reCaptcha secret key.' });
  }

  const url = 'https://www.google.com/recaptcha/api/siteverify';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${key}&response=${token}`,
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'Error verifying reCaptcha.' });
  }

  return res.status(200).json({ success: 'Verified' });
}
