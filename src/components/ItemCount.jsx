import { useState } from 'react';
const ItemCount = () => {
    const [counter, setCounter] = useState(1)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleClickRest = () => {
    setCounter(counter - 1)
  }
  return (
    <>
     <div class="inline-flex">          
            <button class="bg-gray-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" onClick={handleClickRest} disabled={counter === 1} >
              -
            </button>
            <strong><h1 id='counter'>{counter}</h1></strong>
            <button class="bg-gray-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-full" onClick={handleClick} disabled={counter === 4} >
              +
            </button>           
          </div>
    
    </>
  )
}
export default ItemCount
