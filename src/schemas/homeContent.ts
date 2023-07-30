import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'homeContent',
  title: 'Home Content',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'threeLineSummary',
      title: '3-line Summary',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'summary0',
      title: 'Summary - 0',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'summary1',
      title: 'Summary - 1',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'summary2',
      title: 'Summary - 2',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'summary3',
      title: 'Summary - 3',
      type: 'text',
      rows: 5,
    }),
    defineField({
      name: 'summary4',
      title: 'Summary - 4',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
