export interface ReCaptchaResp {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
}

export async function verifyCaptcha(token: string | null) {
  const key = process.env.NEXT_PUBLIC_RECAPTCHA_KEY as string;

  if (!key) {
    throw new Error('Error retrieving reCaptcha secret key.');
  }

  if (token === null) {
    throw new Error('reCaptcha Token is null');
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
    throw new Error('Failed to verify reCAPTCHA: ' + (await response.json()));
  }

  const data = await response.json();

  const reCaptchaResp: ReCaptchaResp = {
    success: data.success,
    challenge_ts: data['challenge_ts'],
    hostname: data['hostname'],
  };

  return reCaptchaResp;
}
