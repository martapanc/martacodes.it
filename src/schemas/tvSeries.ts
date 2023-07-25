import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'tvSeries',
  title: 'TV Series',
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
      name: 'poster',
      title: 'Poster',
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
