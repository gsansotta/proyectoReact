import { Link } from 'react-router-dom'
const Players = ({ id, img, title, posicion, price, edad, nacionalidad }) => {

  return (
    <>
    
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
      <Link to={`/shop/${id}`}>
        <img src={img} alt="img-error" className="rounded-xl object-contain h-48 w-96" />
       </Link> 
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <h3>Posición: {posicion}</h3>
        <h3>Edad: {edad} años</h3> 
        <h3>Nacionalidad: {nacionalidad} </h3> 
        <h3>Precio: ${price}</h3>      
        <Link to={`/shop/${id}`}>
        <button className="btn btn-primary">VER FICHA</button>
        </Link>
      </div>
    </div>
    </>
   
  )
}
export default Players