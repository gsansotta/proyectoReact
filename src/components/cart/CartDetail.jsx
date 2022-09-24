
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartDetail = ({ title,  id, img, price, quantity }) => {
    const { removeItem } = useContext(CartContext)

    const onDelete = () => {
        removeItem(id)
    }



    return (
        <>       
            <div className="flex justify-between items-center mt-6 pt-6">
                <div className="flex  items-center">
                    <Link to={`/product/${id}`}>
                        <img src={img} width="60" className="rounded-full " />
                    </Link>
                    <div className="flex flex-col ml-3">
                        <Link to={`/product/${id}`}>
                            <span className="md:text-md font-medium">{title}</span>
                        </Link>                        
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="pr-8 flex ">
                    <span className="text-xs font-medium">Años de contrato: {quantity}</span>
                    </div>
                    <div className="pr-8 ">
                    <span className="text-xs font-medium">$ {price*quantity}</span>                    
                    </div>
                    <div>
                        <button onClick={onDelete}> <span className="text-xs font-bold" >X</span></button>
                    </div>
                </div>
            </div>           
         </>
    )
}
export default CartDetail