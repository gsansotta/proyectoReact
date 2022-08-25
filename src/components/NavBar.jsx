import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
      <div className="navBar">
          <a href="http://"><li>Inicio</li></a>
          <a href="http://"><li>Productos</li></a>
          <a href="http://"> <li>Contacto</li></a>
          <a href="http://"><li>About</li></a>
          <CartWidget/>
      </div>
    )
  }
  export default NavBar