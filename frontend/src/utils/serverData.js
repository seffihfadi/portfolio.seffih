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
= `*[_type == "project"] | order(_createdAt desc){
    _id,
    _createdAt,
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
    description,
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
    anoID,
    job,
    feedback,
    name,
    project,
    pub
  }`


export const usersQuery = (days) => {
  return `*[_type == "anonymousUser" && dateTime(_createdAt) > dateTime(now()) - 60*60*24*${days}] | order(_createdAt desc){
      _id,
      comingfrom,
      _createdAt,
      isAdmin

    }`
}
  
export const adminQuery = `*[_type == "anonymousUser" && isAdmin == true]{ _id }`
