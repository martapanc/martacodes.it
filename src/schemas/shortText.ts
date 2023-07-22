import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'shortText',
  title: 'Short Text',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          // marks: {
          //   annotations: [
          //     {
          //       name: 'years',
          //       title: 'Years',
          //       type: 'object',
          //       fields: [
          //         {
          //           name: 'yearsOfExp',
          //           title: 'Years of Experience',
          //           type: 'number',
          //         },
          //       ],
          //     },
          //   ],
          // },
        },
      ],
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
  ],
});
