import { gql } from '@apollo/client';
import { groq } from 'next-sanity';

export const codeSnippetsQuery = groq`
*[_type == "codeSnippet"] {
  _id,
  title,
  "code": code.code,
  "language": code.language,
}`;

export const codeSnippetsQueryQL = gql`
  query {
    codeSnippets {
      data {
        id
        attributes {
          language
          code
        }
      }
    }
  }
`;
