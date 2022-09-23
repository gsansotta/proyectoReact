import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import CartDetail from "./CartDetail"



const Cart = () => {

  const { getPlayers, items, clear} = useContext(CartContext)


  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {
    console.log(getPlayers())
    setFutbolistas(getPlayers())

  }, [items])


  return (
    <>
    <div>
       {futbolistas.length ? (
                    futbolistas.map((item) => <CartDetail carrito={item} {...item} />)
                  ) : (
                    <h2>No hay productos en el carrito...</h2>
                  )}
    </div>

      {futbolistas.length ? 
        <div> <button className="btn" onClick={clear}> VACIAR CARRITO </button>

        </div> :
        ''
      } 
         </>

  )
}
export default Cart