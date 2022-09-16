import React, { createContext, useState } from "react";
export const CartContext = createContext();
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    function addItem(item, quantity) {
        debugger;
        console.log(item.id, quantity);

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

    return (
        <CartContext.Provider value={{ addItem,isInCart,removeItem }}>
            {children}
        </CartContext.Provider>

    )
}