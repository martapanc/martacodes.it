import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const trueRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == true] 
{
  _id,
  name,
  headline,
  description,
  explanation,
}`;

export const trueRandomFactsQueryQL = gql`
  query {
    randomFacts(locale: "en", filters: { isFactTrue: { eq: true } }) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;

export const selectedTrueRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == true && name != "Correspondence"] 
{
  _id,
  name,
  headline,
  description,
  explanation,
}`;

export const selectedTrueRandomFactsQueryQL = gql`
  query {
    randomFacts(
      locale: "en"
      filters: { isFactTrue: { eq: true }, name: { notContains: "(True)" } }
    ) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;

export const falseRandomFactsQuery = groq`
*[_type == "randomFact" && isFactTrue == false] 
{
  _id,
  name,
  headline,
  description,
  explanation,
}`;

export const falseRandomFactsQueryQL = gql`
  query {
    randomFacts(locale: "en", filters: { isFactTrue: { eq: false } }) {
      data {
        id
        attributes {
          name
          isFactTrue
          headline
          description
          explanation
        }
      }
    }
  }
`;

export const randomFactsQuery = groq`
*[_type == "randomFact"] {
  _id,
  name,
  description,
  explanation,
  isFactTrue
}`;
