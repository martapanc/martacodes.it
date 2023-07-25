import { groq } from 'next-sanity';

export const podcastsQuery = groq`
*[_type == "podcast"] | order(author asc) {
  _id,
  name,
  author,
  language,
  "cover": cover.asset->url,
  mediaLink,
}`;
