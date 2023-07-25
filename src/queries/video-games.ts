import { groq } from 'next-sanity';

export const videoGamesQuery = groq`
*[_type == "videoGame"] | order(year desc) {
  _id,
  title,
  year,
  "cover": cover.asset->url,
  mediaLink,
}`;
