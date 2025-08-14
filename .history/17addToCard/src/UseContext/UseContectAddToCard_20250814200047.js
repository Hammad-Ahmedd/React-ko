import React, { createContext, useContext } from "react";

export const UseContextAddToCard = createContext({
    products: {
        id: 1,
        name: "Product",
        price: 10,
        imgsrc: "#",
        quantity:"1"
        increase
    },
    addToCard: (id, product) => { },
    removeToCard: (id) => { },
});

export const UseAddToCard = () => {
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider = UseContextAddToCard.Provider
