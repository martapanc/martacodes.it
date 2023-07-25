import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'podcast',
  title: 'Podcast',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'language',
      title: 'language',
      type: 'string',
      options: {
        list: [
          { title: 'En', value: 'en' },
          { title: 'It', value: 'it' },
        ],
      },
    }),
    defineField({
      name: 'cover',
      title: 'Cover',
      type: 'image',
    }),
    defineField({
      name: 'mediaLink',
      title: 'Media Link',
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
