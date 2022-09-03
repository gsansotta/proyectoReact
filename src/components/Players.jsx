import { useState } from 'react';

const Players = ({ nombre, imagen, posicion, precio }) => {
  const [counter, setCounter] = useState(1)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleClickRest = () => {
    setCounter(counter - 1)
  }

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
          <div class="inline-flex">          
            <button class="bg-gray-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" onClick={handleClickRest} disabled={counter === 0} >
              -
            </button>
            <strong><h1 id='counter'>{counter}</h1></strong>
            <button class="bg-gray-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick} disabled={counter === 4} >
              +
            </button>           
          </div>
        </div>
        <button class="btn btn-primary">CONTRATAR</button>
      </div>
    </div>
  )
}
export default Players