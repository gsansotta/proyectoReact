
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
const CartDetail = ({ title,  id }) => {
    const { removeItem } = useContext(CartContext)

    const onDelete = () => {
        removeItem(id)
    }



    return (
        <div>
            <div>{title} </div>
            <button className="btn" onClick={onDelete}></button>
        </div>
    )
}
export default CartDetail