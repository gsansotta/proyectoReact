import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import CartDetail from "./CartDetail"
import { Link } from "react-router-dom"



const Cart = () => {

  const { getPlayers, items, clear, totalCart } = useContext(CartContext)


  const [futbolistas, setFutbolistas] = useState([]);

  useEffect(() => {   
    setFutbolistas(getPlayers())

  }, [items])


  return (
    <>
      <div className="h-screen bg-gray-300">
        <div className="py-12">
          <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
            <div className="md:flex ">
              <div className="w-full p-4 px-5 py-5">

                <div className="md:grid md:grid-cols-2 gap-2 ">

                  <div className="col-span-2 p-5">

                    <h1 className="text-xl font-medium ">Carrito </h1>
                    <div>
                      {futbolistas.length ? (
                        futbolistas.map((item) => <CartDetail carrito={item} {...item} />)
                      ) : (
                        <h2>No hay productos en el carrito...</h2>
                      )}
                    </div>
                    <div className="flex justify-between items-center mt-6 pt-6 border-t">
                      <div className="flex flex-col items-center">
                        <div>
                          <Link to="/"> <span className="text-md  font-medium text-blue-500">Continuar comprando</span></Link>
                        </div>
                      </div>
                      <div className="flex justify-center items-end">
                        <span className="text-sm font-medium text-gray-400 mr-1">Total:</span>
                        <span className="text-lg font-bold text-gray-800 "> $ {totalCart()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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