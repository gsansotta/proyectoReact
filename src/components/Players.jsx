import { Link } from 'react-router-dom'
const Players = ({ id, img, title, posicion, price, edad, nacionalidad }) => {

  return (
    <>
    
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
      <Link to={`/shop/${id}`}>
        <img src={img} alt="img-error" className="rounded-xl object-contain h-49 w-96" />
       </Link> 
      </figure>
      <div className="card-body items-center text-center">
        <strong><h1 className="card-title">{title}</h1></strong>
        <h3><strong>Posición:</strong> {posicion}</h3>
        <h3><strong>Edad:</strong> {edad} años</h3> 
        <h3><strong>Nacionalidad:</strong> {nacionalidad} </h3> 
        <h3><strong>Contrato anual: $</strong>{price}</h3>      
        <Link to={`/shop/${id}`}>
        <button className="btn btn-primary">VER FICHA</button>
        </Link>
      </div>
    </div>
    </>
   
  )
}
export default Players