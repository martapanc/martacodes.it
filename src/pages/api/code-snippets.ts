import { NextApiRequest, NextApiResponse } from 'next';

import { queryCodeSnippets } from '@/queries/codeSnippets';

import { CodeSnippet } from '@/types/CodeSnippet';

const codeSnippetsApi = async (req: NextApiRequest, res: NextApiResponse) => {
  const codeSnippets: CodeSnippet[] = await queryCodeSnippets();

  res.status(200).json({
    codeSnippets,
  });
};

export default codeSnippetsApi;
