import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'videoGame',
  title: 'Video Game',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
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
      title: 'Year',
      name: 'yearDesc',
      by: [{ field: 'year', direction: 'desc' }],
    },
  ],
});
