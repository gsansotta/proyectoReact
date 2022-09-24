import { useEffect, useState } from "react"
import PlayersList from "./PlayersList"
import { getPlayers, getPlayerByposicion } from "./firebase/ProductsContainer"


const ItemListContainer = ({ greeting, posicion = null }) => {
  const [futbolistas, setFutbolistas] = useState([]);

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

  }, [])

  return (
    <>
      <div className="greeting">{greeting}</div>
      {<PlayersList players={futbolistas} />}
    </>
  );
}
export default ItemListContainer