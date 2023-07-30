import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'codeSnippet',
  title: 'Code Snippet',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Code Snippet',
      type: 'code',
    }),
  ],
});
