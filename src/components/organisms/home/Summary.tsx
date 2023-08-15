import Image from 'next/image';
import React from 'react';

const Summary = () => {
  return (
    <>
      <div className='pb-4 text-base antialiased'>
        I'm a software engineer based in Turin, Italy, and I am currently
        working at
        <a
          href='https://resourcify.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='ms-2 inline'
            src='https://cdn.sanity.io/images/lj8a3h3g/production/c0f36368549d879ad790c46fd32f7ea10e3e258f-600x115.webp'
            alt='Resourcify'
            width='110'
            height='25'
          />
        </a>
        .
      </div>

      <p className='pb-4 text-base antialiased'>
        I hold a MSc in Advanced Computer Science from the University of
        Manchester, and have four years of experience at
        <a href='https://bjss.com/' target='_blank' rel='noopener noreferrer'>
          <Image
            className='mx-2 inline'
            src='https://cdn.sanity.io/images/lj8a3h3g/production/0c8cfb9083cafb314b46b195ab99a27daf2f639d-280x150.webp'
            alt='BJSS'
            width='45'
            height='25'
          />
        </a>
        and
        <a
          href='https://booking.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            className='ms-2 inline'
            src='https://cdn.sanity.io/images/lj8a3h3g/production/a9bb3876e39ba378769bcc9b881ad8860dcbb9df-2500x424.svg'
            alt='Booking.com'
            width='115'
            height='25'
          />
        </a>
        .
      </p>

      <p className='pb-4 text-base antialiased'>
        My skill set embraces a range of programming languages, including Java,
        Kotlin, Python, C# and TypeScript, as well as frontend frameworks such
        as React and Angular.
      </p>

      <p className='pb-4 text-base antialiased'>
        While I have a solid foundation in backend development, my heart truly
        lies in the exciting realm of full-stack engineering.
      </p>

      <p className='pb-4 text-base antialiased'>
        In my free time, I’m a fiction writer, an avid bookworm, an oboist and
        alto singer, and a travel photographer.
      </p>
    </>
  );
};

export default Summary;
