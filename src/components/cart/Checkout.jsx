import { addDoc, collection, getFirestore, Timestamp } from "firebase/firestore";
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import Swal from "sweetalert2";


const Checkout = () => {
    const { items, totalCart, clear } = useContext(CartContext)
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')

    const orderHandler = () => {
        let order = {
            nombre: name,
            Mail: email,
            telefono: phone,
            ...items,
            date: Timestamp.now(),
            total: totalCart()

        }

        const db = getFirestore()
        const orderCollection = collection(db, "orders")
        addDoc(orderCollection, order).then(({ id }) => {
            Swal.fire(
                '¡Has contratado exitosamente a los futbolistas seleccionados!',
                `El código de tu pedido es : ${id} por la suma de $ ${totalCart()}. ¡A por la gloria!.`,
                'success'
            )
            clear()
        }
        )
    }



    return (
        <>
        <div className="flex flex-col justify-center items-center">
            <div className="form-control w-full max-w-xs my-5 ">
                <input onChange={(e) => { setName(e.target.value) }} type="text" placeholder="nombre" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <div className="form-control w-full max-w-xs my-5">
                <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="e-mail" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <div className="form-control w-full max-w-xs my-5">
                <input onChange={(e) => { setPhone(e.target.value) }} type="tel" placeholder="telefono" className="input input-bordered w-full max-w-xs"></input>
            </div>
            <button onClick={orderHandler} className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-4 text-sm text-white uppercase w-80">FINALIZAR COMPRA</button>
            </div>
        </>
    )
}
export default Checkout