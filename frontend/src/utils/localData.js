export const whatCanIDo = [
  {
    icon: 'browse',
    name: 'frontend development',
    desc: 'I can build website interfaces using HTML, CSS, JavaScript, and various tools to ensure an engaging, responsive, and user-friendly experiences.'
  },
  {
    icon: 'laptop_mac',
    name: 'backend development',
    desc: 'I can handle server-side logic, databases, and APIs, ensuring smooth data processing, security, and functionality to support front-end interactions.'
  },
  {
    icon: 'draw_abstract',
    name: 'ui/ux design',
    desc: 'collaborate with designers to implement visual elements, interactive features, and responsive layouts for user-friendly web and app interfaces.'
  },
  {
    icon: 'phone_iphone',
    name: 'mobile apps development',
    desc: 'React Native enables cross-platform mobile app ( iOS & Android ) development using JavaScript.',
    soon: true
  }
  
]

function age(birthYear){
  const thisYear = new Date().getFullYear()
  return thisYear - birthYear
}

export const bioData = {

  desc1: 'Embark on a web development journey with a passionate and dedicated developer proficient in Front-end and Back-end technologies. Years of experience in coding and creative design ensure seamless, captivating digital experiences.',
  desc2: 'Whether you\'re a fellow developer, a visionary entrepreneur, or an aspiring artist, I invite you to explore my portfolio and witness the fusion of art and technology. Together, let\'s elevate your online presence and leave a lasting impression on the vast expanse of the internet.',
  job: 'web developer',
  info: {
    name: 'seffih fadi',
    newExperience: `${new Date().getFullYear() - 2021} years`,
    age: `${age(2004)} years`,
    freelance: 'avaliable',
  },
  contact: {
    address: 'Amizour | Bejaia',
    email: 'seffihfadi2004@gmail.com',
    phone: '(+213) 561 01 85 65',
    linkedin: 'seffih-fadi',
  }
}

export const heroData = {
  name: `${bioData.info.name}`,
  email: bioData.contact.email,
  phone: bioData.contact.phone,
  job: bioData.job,
  desc: 'I am a passionate web developer, and this is where pixels come to life, and ideas take flight. With a fervor for crafting immersive digital experiences, I blend cutting-edge technology with intuitive design to build websites that captivate and engage.'
}

export const footerData = {
  contact: {
    touch: 'get in touch',
    text: 'Always available for freelancing if the right project comes along, Feel free to contact me.',
    address: bioData.contact.address,
    phone: bioData.contact.phone,
    email: bioData.contact.email
  },
  feedback: {
    touch: 'leave a testimonial',
    text: 'Thank you for taking the time to share your thoughts and feelings. Your testimonial not only made my day but will also motivate me to be the best version of myself.',
  }
}