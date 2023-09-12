import * as React from 'react';

export const metadata = {
  title: 'Contacts | MartaCodes.it',
  description: 'Contacts page',
};

const ContactsPage = async () => {
  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>Contacts</h1>
        </div>
      </section>
    </main>
  );
};

export default ContactsPage;
