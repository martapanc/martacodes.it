import ContactsPage from '@/components/pages/contacts-page';

export const metadata = {
  title: 'Contacts | MartaCodes.it',
  description: 'Contact page',
};

export default async function Page() {
  return <ContactsPage />;
}
