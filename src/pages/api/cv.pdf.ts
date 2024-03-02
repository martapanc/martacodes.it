/* eslint-disable no-console */
import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const cloudinaryUrl =
      'https://res.cloudinary.com/dwrurydlt/image/upload/v1709393747/CV_2024-03.pdf';

    const cloudinaryResponse = await fetch(cloudinaryUrl);

    if (!cloudinaryResponse.ok) {
      console.error(
        'Error fetching the PDF from Cloudinary:',
        cloudinaryResponse.statusText,
      );
      res.status(500).end('Internal Server Error');
      return;
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'inline; filename=cv.pdf');

    cloudinaryResponse.body?.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).end('Internal Server Error');
  }
}
