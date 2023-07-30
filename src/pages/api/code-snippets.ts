import { NextApiRequest, NextApiResponse } from 'next';

import { codeSnippetsQuery } from '@/queries/codeSnippets';

import { sanityClient } from '../../../sanity/lib/client';

import { CodeSnippet } from '@/types/CodeSnippet';

const codeSnippetsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const codeSnippets: CodeSnippet[] = await sanityClient.fetch(
    codeSnippetsQuery
  );

  res.status(200).json({
    codeSnippets,
  });
};

export default codeSnippetsApi;
