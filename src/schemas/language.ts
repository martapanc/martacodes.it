import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'language',
  title: 'Language',
  type: 'document',
  fields: [
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'level',
      title: 'Level',
      type: 'string',
    }),
    defineField({
      name: 'flag',
      title: 'Icons',
      type: 'image',
    }),
  ],
  orderings: [
    {
      title: 'Custom Order',
      name: 'custom',
      by: [{ field: 'id', direction: 'asc' }],
    },
  ],
});
