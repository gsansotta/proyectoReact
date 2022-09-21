import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore";


export const ProductCard = ({title, price, img}) => {
  return (
    <>
    <li>{title}</li>
    <li>{price}</li>
    <img src={img} alt="" />
</>

  )
}

const ProductsContainer = () => {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        /* getPlayer() */
        getPlayers()

    }, [])

    /* const getPlayer = () => {
        const db = getFirestore()
        const messiRef = doc(db, 'items', '5sL6ZAETbRF6sI9ct0Mn')
        getDoc(messiRef).then(res => {
            const data = res.data()
            console.log(data);
            setPlayer (data)

        })

    } */

    const getPlayers = () =>{
        const db = getFirestore()
        const playersColection = collection(db, 'items')
        getDocs( playersColection).then((snapshot) =>{
            setPlayers(snapshot.docs.map(d=> ({id: d.id, ...d.data()})));
        })




    }

    return (
      /*  <ProductCard{...player}/> */
      <>
     {
        players.map(p => <ProductCard key={p.id} {...p}/>)
      } 
      </>

    )
}
export default ProductsContainer