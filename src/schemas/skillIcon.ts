import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'skillIcon',
  title: 'SkillIcon',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
});
