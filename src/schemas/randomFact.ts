import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'randomFact',
  title: 'Random Fact',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'What will appear as MC option in the quiz',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'isFactTrue',
      title: 'Is fact true?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
