export default {
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Education Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'

    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      validation: Rule => Rule.regex(/^\d{4}-\d{4}$/)
    }
  ]
}