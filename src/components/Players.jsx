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
    <article >
      <h1>{nombre}</h1>
      <img src={imagen} alt="" className='object-contain h-48 w-96' />
      <h3>{posicion}</h3>
      <h2>{precio}</h2>
      <strong>Años de contrato:</strong>   
      <div class="inline-flex">
        <button onClick={handleClickRest} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" disabled={counter===1}>
          -
        </button>
        {counter}
        <button onClick={handleClick} class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r" disabled={counter===4}>
          +
        </button>
      </div>
    </article>
  )
}
export default Players