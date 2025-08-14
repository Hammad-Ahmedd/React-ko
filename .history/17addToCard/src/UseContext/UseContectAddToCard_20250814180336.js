import React, { createContext, useContext } from "react";

export const UseContextAddToCard = createContext({
    products:{
        id:1,
        name:"Product",
        imgsrc:"#"
    },
    addToCard:(id,products)=>{}
});

export const UseAddToCard = () => {
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider = UseContextAddToCard.Provider
