import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'



const NavBar = () => {
 

  return ( 
    <header className="header">
      <nav className="navBar">
        <Link to={'/'}>
          <li>Inicio</li>
        </Link>
        <Link to={`/posicion/arquero`}><li>Arqueros</li></Link>
        <Link to={`/posicion/defensor`}><li>Defensores</li></Link>
        <Link to={`/posicion/mediocampista`}><li>Mediocampistas</li></Link>
        <Link to={`/posicion/delantero`}><li>Delanteros</li></Link>
        <Link to="/cart"> <CartWidget /></Link>        
      </nav>      
    </header>
  )
}
export default NavBar