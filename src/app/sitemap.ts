const URL = 'https://martacodes.it';

export default async function sitemap() {
  const routes = [
    '',
    '/cv',
    '/work',
    '/about',
    '/projects',
    '/uses',
    '/recruiters-info',
    '/contacts',
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
