import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'book',
  title: 'Book',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'fiction',
      title: 'Fiction?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
    }),
    defineField({
      name: 'goodreadsLink',
      title: 'Goodreads Link',
      type: 'string',
    }),
  ],
  orderings: [
    {
      title: 'Author',
      name: 'authorAsc',
      by: [{ field: 'author', direction: 'asc' }],
    },
  ],
});
