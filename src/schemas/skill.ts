import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
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
      name: 'icons',
      title: 'Icons',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'skillIcon' }],
        },
      ],
    }),
  ],
});
