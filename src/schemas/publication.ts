import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    defineField({
      name: 'sortId',
      title: 'Sort Id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'publisher',
      title: 'Publisher',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
  ],
  orderings: [
    {
      title: 'Most Recent',
      name: 'mostRecent',
      by: [{ field: 'sortId', direction: 'asc' }],
    },
  ],
});
