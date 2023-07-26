
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socials = [
    {
      icon: 'link',
      link: 'https://www.linkedin.com/in/seffih-fadi'
    },
    {
      icon: 'nest_audio',
      link: 'https://web.facebook.com/imad.jawad.3532'
    },
  ]
  return (
    <footer className="flex justify-around items-center py-4">
      <div className="social">
        {socials.map((social) => 
        <a key={social.icon} href={social.link} className="mx-2">
          <span className="material-symbols-rounded text-gray-500 font-bold">{social.icon}</span>
        </a>
        )}
      </div>
      <div className="right">
        <h4 className="capitalize">
          &copy; {currentYear} <span className="font-bold">seffih portfolio.</span> All rights reserved. {/*feb 2, 2023*/}
        </h4>
      </div>
    </footer>

  )
}

export default Footer