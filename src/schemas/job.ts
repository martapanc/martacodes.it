import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      initialValue: 'Mar 2020',
    }),
    defineField({
      name: 'endDate',
      title: 'End Year',
      type: 'date',
      options: {
        dateFormat: 'MMM YYYY',
      },
      initialValue: 'Mar 2022',
    }),
    defineField({
      name: 'isCurrentJob',
      title: 'Current Job?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'mainColor',
      title: 'MainColor',
      type: 'string',
      initialValue: '#000000',
    }),
    defineField({
      name: 'darkColor',
      title: 'DarkColor',
      type: 'string',
      initialValue: '#FFFFFF',
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
  ],
  orderings: [
    {
      title: 'Most Recent',
      name: 'jobDateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
  ],
});
