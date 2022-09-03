import ItemCount from "./ItemCount"

const Players = ({ nombre, imagen, posicion, precio }) => {

  return (
    <div class="card w-96 bg-base-100 shadow-xl ">
      <figure class="px-10 pt-10">
        <img src={imagen} alt="img-error" class="rounded-xl object-contain h-48 w-96" />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title">{nombre}</h2>
        <h3>Posición: {posicion}</h3>
        <h3>Precio: ${precio}</h3>
        <strong>Años de contrato:</strong>
        <div class="card-actions">  
          <ItemCount/>
        </div>
        <button class="btn btn-primary">CONTRATAR</button>
      </div>
    </div>
  )
}
export default Players