import { groq } from 'next-sanity';

export const trueRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == true] {
  _id,
  name,
  description
}`;

export const falseRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == false] {
  _id,
  name,
  description,
  explanation
}`;

export const randomFactsQuery = groq`
*[_type == "randomFact"] {
  _id,
  name,
  description,
  isFactTrue
}`;
