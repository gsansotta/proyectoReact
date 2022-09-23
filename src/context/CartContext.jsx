import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    function addItem(item, quantity) {      
      
        if (isInCart(item.id)) {
            let aux = item;
            let itemIndex = aux.indexOf((element) => element.id === item.id)
            aux[itemIndex].quantity += quantity
        } else {
            setItems([...items, { ...item, quantity }])
        }
    }

    function removeItem(itemId) {
        setItems(items.filter(actual => actual.id !== itemId))
    }

    function clear() {
        setItems([])
    }

    function isInCart(itemId) {
        return items.some((element) => element.id === itemId)
    }

    const getPlayersId = () =>{
        let ids = [];
        for (const iterator of items) {
            ids.push(iterator.id)
        }
        return ids;
    }

    const getPlayers = () => {
        return items;
    }

    const getQuantity = () => {
        let quantity = 0;
        items.forEach(actual => {
            quantity += actual.quantity
        })
        return quantity;
    }

    const totalCart = () => {
        let total = 0;
        items.forEach(actual => {          
            actual.quantity>1 ? total += (actual.quantity*actual.price) : total += actual.price 
        })
        return total;
    }


    return (
        <CartContext.Provider value={{ getPlayersId, addItem,isInCart,removeItem,getPlayers,items, clear, getQuantity, totalCart }}>
            {children}
        </CartContext.Provider>

    )
}