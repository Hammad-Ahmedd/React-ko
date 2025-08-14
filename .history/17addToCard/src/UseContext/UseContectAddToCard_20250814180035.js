import React, { createContext, useContext } from "react";

export const UseContextAddToCard = createContext({
    product:{
        id:1,
        name:"Pro"
    }
});

export const UseAddToCard = () => {
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider = UseContextAddToCard.Provider
