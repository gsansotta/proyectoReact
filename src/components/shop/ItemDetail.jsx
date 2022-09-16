import { React,useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import futbolistasJson from "../../futbolsitas.json"
import ItemCount from "../ItemCount"

const ItemDetail = () => {
  const [player, setPlayer] = useState({})
  const { playerId } = useParams();
  const { addItem,isInCart,removeItem } = useContext(CartContext)
  const [counter, setCounter] = useState(1)
  useEffect(() => {
    getPlayers().then(players => {
      let actualPlayer = players.filter(play => play.id == playerId)[0]
      setPlayer(actualPlayer)      
    })
  }, [])

  const onAdd = (quantity) => {
    debugger;
    setCounter(quantity);
    addItem(player, quantity)
  }
  const onDelete = () =>{
    removeItem(player.id)
  }
  const buttonToCart = <Link to='/cart'><button className="btn btn-primary"> Ir al carrito </button></Link>
  const buttonDeletePlayer = <button className="btn btn-primary" onClick={onDelete}> Eliminar jugador</button>
  
  const getPlayers = () => {
    const players = JSON.parse(JSON.stringify(futbolistasJson))
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(players)
      }, 2000);
    })

  }
 

  return (    
    <>
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={player.imagen} alt="Album" /></figure>
        <div className="card-body">
          <h2 className="card-title">{player.nombre}</h2>
          <p>${player.precio}</p>
          <div class="justify-center">
            <h2 className="card-title">AÑOS DE CONTRATO</h2>
            {isInCart(player.id) ?buttonToCart:<ItemCount onAdd={onAdd}/>  }
            {isInCart(player.id) ?buttonDeletePlayer: ''  }
          </div>         
        </div>
      </div>
    </>
  )
  
}
export default ItemDetail