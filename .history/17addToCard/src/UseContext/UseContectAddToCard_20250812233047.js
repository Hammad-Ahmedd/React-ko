import React, { createContext, useContext } from "react";

export const UseContextAddToCard=createContext();

export const UseAddToCard=()=>{
    return useContext(UseContextAddToCard)
}

export const UseContextATCProvider=UseContextAddToCard.p
