import { Link } from "react-scroll";
const Navbar = () => {

  const pageLinks = [
    {logo: 'home', title: 'biography'},
    {logo: 'badge', title: 'education'},
    {logo: 'draw_abstract', title: 'do'},
    {logo: 'sensor_occupied', title: 'portfolio'},
    {logo: 'groups', title: 'testimonials'},
    {logo: 'contact_mail', title: 'contact'}
  ]

  return (
    <header>
      <div className="links">
        <ul>
          {pageLinks.map((link, i) =>
            <li key={i}>
              <Link activeClass="active" to={link.title} spy={true} smooth={true}>
                <span className="material-symbols-rounded text-2xl">{link.logo}</span>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </header>

  )
}

export default Navbar