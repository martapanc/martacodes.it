import { NextApiRequest, NextApiResponse } from 'next';

import { codeSnippetsQuery } from '@/queries/codeSnippets';
import { CodeSnippet } from '@/sanityTypes/CodeSnippet';

import { sanityClient } from '../../../sanity/lib/client';

const codeSnippetsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const codeSnippets: CodeSnippet[] = await sanityClient.fetch(
    codeSnippetsQuery
  );

  res.status(200).json({
    codeSnippets,
  });
};

export default codeSnippetsApi;
