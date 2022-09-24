import { useEffect, useState} from "react"
import PlayersList from "./PlayersList"
import { getPlayers, getPlayerByposicion } from "./firebase/ProductsContainer"
import { useParams } from 'react-router-dom'


const ItemListContainer = ({ greeting}) => {
  const [futbolistas, setFutbolistas] = useState([]);
  const {posicion} = useParams()

  useEffect(() => {
    if (posicion == null) {
      getPlayers().then((actuales) => {
        setFutbolistas(actuales)
      })
    } else {
      getPlayerByposicion(posicion).then((actuales) => {
        setFutbolistas(actuales)
      })
    }

  }, [futbolistas])
 

  return (
    <>
      <div className="greeting">{greeting}</div>
      {<PlayersList players={futbolistas} />}
    </>
  );
}
export default ItemListContainer