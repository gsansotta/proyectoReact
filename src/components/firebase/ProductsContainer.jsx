import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore,doc,getDoc } from "firebase/firestore";


export const ProductCard = ({ title, price, img }) => {
  return (
    <>
      <li>{title}</li>
      <li>{price}</li>
      <img src={img} alt="" />
    </>

  )
}

export const getPlayer = (playerId) => {
  const db = getFirestore()
  const player = doc(db, 'items', playerId)
  return getDoc(player).then(res => {
    const data = res.data()
    return data
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

