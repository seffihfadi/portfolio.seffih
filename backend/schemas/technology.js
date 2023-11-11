export default {
  name: 'technology',
  title: 'Technology',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Technology Name',
      type: 'string'
    },
    
    {
      name: 'logo',
      title: 'Technology Logo',
      type: 'image',
      options: {
        hotspot: true
      }

    },
    {
      name: 'percentage',
      title: 'Percentage',
      type: 'number',
      validation: Rule => Rule.min(0).max(100)
    }
  ]
}