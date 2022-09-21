import { useEffect, useState } from "react"
import futbolistasJson from "../futbolsitas.json"
import PlayersList from "./PlayersList"


const ItemListContainer = ({ greeting }) => {
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
    getFutbolistas(futbolistasJson, 3000)
      .then((res) => {
        setFutbolistas(res)
      }).catch((err) => console.log(err, ": no hay futbolistas"))
  }, [])


  return (
    <>
      <div className="greeting">{greeting}</div>
      {<PlayersList players={futbolistas} />}
    </>
  );
}
export default ItemListContainer