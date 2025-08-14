import React, { createContext, useContext } from "react";

export const UseContextAddToCard = createContext({
    p
});

export const UseAddToCard = () => {
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider = UseContextAddToCard.Provider
