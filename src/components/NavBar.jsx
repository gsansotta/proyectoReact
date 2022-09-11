import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header className="header">
    <nav className="navBar">
      <Link to={'/'}>
        <li>Inicio</li>
      </Link>
      <a href="http://"><li>Productos</li></a>
      <a href="http://"> <li>Contacto</li></a>
      <a href="http://"><li>About</li></a>
      <CartWidget />
    </nav>
    </header>
  )
}
export default NavBar