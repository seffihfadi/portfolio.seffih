
export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Testimonial Name',
      type: 'string',
    },
    {
      name: 'feedback',
      title: 'Testimonial Feedback',
      type: 'string',
    },
    {
      name: 'job',
      title: 'Testimonial Job',
      type: 'string',
    },
    {
      name: 'project',
      title: 'Project',
      type: 'string'
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