import React, { createContext, useContext } from "react";

export const UseContextAddToCard = createContext({
    products: {
        id: 1,
        name: "Product",
        price: 10,
        imgsrc: "#",
        quantity: 1,
    },
    addToCard: (product) => { },
    removeToCard: (id) => { },
    increaseQuantity: (id, product) => { },
    decraseQuantity: (id, product) => { }
});

export const UseAddToCard = () => {
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider = UseContextAddToCard.Provider
