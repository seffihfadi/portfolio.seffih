export const technologyQuery 
= `*[_type == "technology"] | order(percentage desc){
    _id, 
    name,
    description, 
    percentage,
    logo{
      asset -> {
        url
      }
    }, 
  }`

export const educationQuery 
= `*[_type == 'education'] | order(duration asc) {
    description, 
    title,
    duration,
    _id
    
  }`

export const projectQuery 
= `*[_type == "project"]{
    _id,
    pub,
    logo{
      asset->{
        url
      }
    },
    likes[], 
    views[],
    link,
    mokup {
      asset -> {
        url
      }
    },
    color,
    title,
    technologies[] -> {
      name,
      logo{
        asset -> {
          url
        }
      }
    }
  }`

export const testimonialQuery 
= `*[_type == "testimonial"]{
    job,
    feedback,
    name,
    project,
    pub
  }`

  