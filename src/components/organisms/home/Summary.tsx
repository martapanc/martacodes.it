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
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693067033/resourcify_69f3b5b70d.webp'
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
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1692645367/bjss_180dc7fdd7.webp'
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
            src='https://res.cloudinary.com/dwrurydlt/image/upload/v1693067075/bookingcom_91b7aa2e36.svg'
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
