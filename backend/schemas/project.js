export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'

    },
    {
      name: 'logo',
      title: 'Project Logo',
      type: 'image',
    },
    {
      name: 'mokup',
      title: 'Project Mokup',
      type: 'image',
    },
    {
      name: 'views',
      title: 'Views',
      type: 'array',
      of: [{type: 'anonymousUser'}]
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{type: 'anonymousUser'}]
    },
    {
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [{ 
        type: 'reference',
        to: [{type: 'technology'}]
      }],
    },
    {
      name: 'color',
      title: 'Color',
      type: 'string',
      validation: Rule => Rule.regex(/^#[0-9a-fA-F]{6}$/)
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'pub',
      title: 'Published',
      type: 'boolean',
    },
  ],
  initialValue: {
    pub: true
  }
}