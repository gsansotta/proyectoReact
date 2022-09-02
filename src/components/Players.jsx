import { useState } from 'react';

const Players = ({ nombre, imagen, posicion, precio }) => {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {    
    setCounter(counter + 1)
  }

  const handleClickRest = () => {
    if(counter > 0){
    setCounter(counter - 1)}
  }

  return (
    <article>     
      <h1>{nombre}</h1>   
      <img src={imagen} alt="" />
      <h3>{posicion}</h3>
      <h2>{precio}</h2>      
      <strong>Años de contrato: {counter}</strong>
      <button onClick={handleClick} className="btn-primary">+</button>
      <button onClick={handleClickRest} className='btn my-5'>-</button>
    </article>
  )
}
export default Players