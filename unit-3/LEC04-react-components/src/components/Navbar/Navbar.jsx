import './Navbar.css';
import NavbarLink from '../NavbarLink/NavbarLink';

const Navbar = ({ links }) => {
    return (
        <nav id="top-navbar">
          {links.map((link, index) => (
            <NavbarLink key={index}
            {...link}
            />
          ))}
      </nav>
    )
}

export default Navbar