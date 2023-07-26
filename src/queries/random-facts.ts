import { groq } from 'next-sanity';

export const trueRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == true && name != "Correspondence"] 
{
  _id,
  name,
  headline,
  description
}`;

export const falseRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == false] 
{
  _id,
  name,
  headline,
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
