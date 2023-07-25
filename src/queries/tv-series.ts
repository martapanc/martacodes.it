import { groq } from 'next-sanity';

export const tvSeriesQuery = groq`
*[_type == "tvSeries"] | order(year desc) {
  _id,
  title,
  year,
  "poster": poster.asset->url,
  mediaLink,
}`;
