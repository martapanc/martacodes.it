import * as React from 'react';

export const metadata = {
  title: 'CV | MartaCodes.it',
  description: 'CV page',
};

const ProjectsPage = async () => {
  return (
    <main className='min-h-main'>
      <section>
        <div className='layout relative flex flex-col py-12'>
          <h1 className='mb-5'>CV</h1>

          <div className='grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6'></div>
        </div>
      </section>
    </main>
  );
};

export default ProjectsPage;
