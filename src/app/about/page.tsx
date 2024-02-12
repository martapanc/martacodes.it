import books from '@/data/about/books.json';
import podcasts from '@/data/about/podcasts.json';
import randomFacts from '@/data/about/randomFacts.json';
import tvShows from '@/data/about/tvShows.json';
import videoGames from '@/data/about/videoGames.json';

import AboutPage from '@/components/pages/about-page';

export const metadata = {
  title: 'About | MartaCodes.it',
  description: 'All non-software-related things I enjoy doing in my free time.',
};

async function getData() {
  return {
    books,
    podcasts,
    videoGames,
    tvShows,
    randomFacts,
  };
}

export default async function Page() {
  const { books, podcasts, videoGames, tvShows, randomFacts } = await getData();
  return (
    <AboutPage
      books={books}
      podcasts={podcasts}
      videoGames={videoGames}
      tvShows={tvShows}
      randomFacts={randomFacts}
    />
  );
}
