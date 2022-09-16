import { Link } from 'react-router-dom'
const Players = ({ nombre, imagen, posicion, precio,id }) => {

  return (
    <div class="card w-96 bg-base-100 shadow-xl ">
      <figure class="px-10 pt-10">
      <Link to={`/shop/${id}`}>
        <img src={imagen} alt="img-error" class="rounded-xl object-contain h-48 w-96" />
       </Link> 
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{nombre}</h2>
        <h3>Posición: {posicion}</h3>
        <h3>Precio: ${precio}</h3>
        <strong>Años de contrato:</strong>    
        <Link to={`/shop/${id}`}>
        <button class="btn btn-primary">VER FICHA</button>
        </Link>
      </div>
    </div>
  )
}
export default Players