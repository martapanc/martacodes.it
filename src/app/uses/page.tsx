import { readMarkdownData } from '@/lib/markdownUtils';

import UsesPage from '@/components/pages/uses-page';

export const metadata = {
  title: 'Marta uses... | MartaCodes.it',
  description: 'A list of tech equipment and software I use.',
};

async function getData() {
  const usesData = readMarkdownData('uses');
  return {
    usesData,
  };
}

export default async function Page() {
  const { usesData } = await getData();
  return <UsesPage usesData={usesData} />;
}
