import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import futbolistasJson from "../../futbolsitas.json"
import ItemCount from "../ItemCount"

const ItemDetail = () => {
  const [player, setPlayer] = useState({})
  const { playerId } = useParams();


  useEffect(() => {
    getPlayers().then(players => {
      let actualPlayer = players.filter(play => play.id == playerId)[0]
      setPlayer(actualPlayer)
      player.equiposQueJugo.forEach(element => {
        console.log(element)
      });
    })
  }, [])

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
                <ItemCount />
              </div>
              <div className="card-actions justify-center">
                <button className="btn btn-primary">Contratar</button>
              </div>
            </div>
          </div>


    </>
  )
}
export default ItemDetail