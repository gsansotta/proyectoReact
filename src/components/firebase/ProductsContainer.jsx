import { collection, getDocs, getFirestore,doc,getDoc, query, where, documentId } from "firebase/firestore";


export const getPlayer = (playerId) => {
  let products;
  const db = getFirestore()
  const productQuery =  query(collection(db, "items"),where(documentId(),"==",playerId));
  return getDocs(productQuery).then((snapshot)=>{
      products = snapshot.docs.map(d => ({ id: d.id, ...d.data()}));
      return [...products]
  })
}


export const getPlayerByposicion = (posicion) => {
  let products;
  const db = getFirestore()
  const productQuery =  query(collection(db, "items"),where("posicion","==",posicion));
  return getDocs(productQuery).then((snapshot)=>{
      products = snapshot.docs.map(d => ({ id: d.id, ...d.data()}));
      return products
  })
}

export const getPlayers = () => {
  const db = getFirestore()
  const playersColection = collection(db, 'items')
  let players
  return getDocs(playersColection).then((snapshot) => {
    players = snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
    return players
  })

}

