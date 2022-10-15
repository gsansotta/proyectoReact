import { React, useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { getPlayer } from "../firebase/ProductsContainer"
import ItemCount from "../ItemCount"


const ItemDetail = () => {
  const [player, setPlayer] = useState({})
  const { playerId } = useParams();
  const { addItem, isInCart, removeItem } = useContext(CartContext)
  const [counter, setCounter] = useState(1)
  useEffect(() => {
    getPlayer(playerId).then(player => {
      console.log("adentro de itemdetail elplayer es:", player);
      setPlayer(...player)
    })
  }, [])

  const onAdd = (quantity) => {
    setCounter(quantity);
    addItem(player, quantity)    
  }
  
  const onDelete = () => {
    removeItem(player.id)
  }
  const buttonToCart = <Link to='/cart'><button className="btn btn-primary mt-5 ml-5"> Ir al carrito </button></Link>
  const buttonDeletePlayer = <button className="btn btn-primary mt-5 ml-5" onClick={onDelete}> Eliminar jugador</button>
  const buttonContinue = <Link to='/'><button className="btn btn-primary mt-5 ml-5"> Continuar comprando </button></Link>


  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={player.img} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{player.title}</h2>
          <p>Contrato anual $ {player.price}</p>        
          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked={true} />
          </div>
          <div class="justify-center">
            <h2 className="card-title">AÑOS DE CONTRATO</h2>
            {isInCart(player.id) ? buttonToCart : <ItemCount onAdd={onAdd} />}
            {isInCart(player.id) ? buttonDeletePlayer : ''}
            {isInCart(player.id) ? buttonContinue : ''}
          </div>
        </div>
      </div>
    </>
  )

}
export default ItemDetail