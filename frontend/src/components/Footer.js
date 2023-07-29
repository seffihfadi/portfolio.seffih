
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = [
    {
      name: 'linkedin',
      icon: require('../assets/imgs/linkedin.png'),
      link: 'https://www.linkedin.com/in/seffih-fadi'
    },
    {
      name: 'github',
      icon: require('../assets/imgs/github.png'),
      link: 'https://github.com/seffihfadi'
    },
  ]
  return (
    <footer className="flex justify-around items-center py-4">
      <div className="social flex">
        {socials.map((social) => 
        <a key={social.name} href={social.link} className="mx-2 align-text-top" target='_blank'>
          <img className='h-6 w-6' src={social.icon} alt={social.name} />
        </a>
        )}
      </div>
      <div className="right">
        <h4 className="capitalize">
          &copy; {currentYear} <span className="font-bold">seffih portfolio.</span> <span className="hidden md:inline">All rights reserved.</span> {/*feb 2, 2023*/}
        </h4>
      </div>
    </footer>

  )
}

export default Footer