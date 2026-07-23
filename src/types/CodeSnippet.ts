export interface CodeSnippet {
  id: number;
  language: string;
  code: string;
}

export interface CodeSnippetData {
  snippets: CodeSnippet[];
  latestEditTimestamp: string;
}
