import { useEffect, useState } from "react"
import PlayersList from "./PlayersList"
import {getPlayers} from "./firebase/ProductsContainer"


const ItemListContainer = ({ greeting }) => {
  const [futbolistas, setFutbolistas] = useState([]);  
 
  useEffect(() => {
    let prueba = getPlayers().then((actuales)=> {
      setFutbolistas(actuales )
    })        
  
  }, [])

  return (
    <>
      <div className="greeting">{greeting}</div>
      {<PlayersList players={futbolistas} />}
    </>
  );
}
export default ItemListContainer