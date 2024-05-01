import TravelMap from '@/components/organisms/about/TravelMap';

export const metadata = {
  title: 'About - Travel | MartaCodes.it',
  description: 'My adventures around the world',
};

export default async function Page() {
  return (
    <section>
      <div className='layout relative flex flex-col py-12'>
        <TravelMap />
      </div>
    </section>
  );
}
