import CartWidget from "./CartWidget"

const NavBar = () => {
  return (
    <nav className="navBar">
      <a href="http://"><li>Inicio</li></a>
      <a href="http://"><li>Productos</li></a>
      <a href="http://"> <li>Contacto</li></a>
      <a href="http://"><li>About</li></a>
      <CartWidget />
    </nav>
  )
}
export default NavBar