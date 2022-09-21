import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../context/CartContext"
import futbolistasJson from "../../futbolsitas.json"
import PlayersList from "../PlayersList"


const Cart = () => {

  const { getPlayersId } = useContext(CartContext)



  const [futbolistas, setFutbolistas] = useState([]);
  const getFutbolistas = (data, time) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data) {
        resolve(data)
      } else {
        reject('Error')
      }
    }, time)
  });

  useEffect(() => {
    getFutbolistas(futbolistasJson)
      .then((res) => {
        let ids = getPlayersId()
        let playersActuales = []
        for (const iterator of res) {
          for (let index = 0; index < ids.length; index++) {
            if (iterator.id == ids[index]) {
              playersActuales.push(iterator);
            }
          }
        }
        setFutbolistas(playersActuales)
        console.log(playersActuales);
      }).catch((err) => console.log(err, ": no hay futbolistas"))
  }, [])



  return (
    <div>Cart</div>
  )
}
export default Cart