import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'school',
  title: 'School',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'schoolName',
      title: 'School Name',
      type: 'string',
    }),
    defineField({
      name: 'schoolIcon',
      title: 'School Icon',
      type: 'image',
    }),
    defineField({
      name: 'countryFlag',
      title: 'Country Flag',
      type: 'image',
    }),
    defineField({
      name: 'degreeName',
      title: 'Degree Name',
      type: 'string',
    }),
    defineField({
      name: 'degreeUrl',
      title: 'Degree Url',
      type: 'string',
    }),
    defineField({
      name: 'grade',
      title: 'Grade',
      type: 'string',
    }),
    defineField({
      name: 'startYear',
      title: 'Start Year',
      type: 'number',
      initialValue: new Date().getFullYear() - 5,
    }),
    defineField({
      name: 'endYear',
      title: 'End Year',
      type: 'number',
      initialValue: new Date().getFullYear() - 3,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
  orderings: [
    {
      title: 'Most Recent',
      name: 'schoolDateDesc',
      by: [{ field: 'endYear', direction: 'desc' }],
    },
  ],
});
