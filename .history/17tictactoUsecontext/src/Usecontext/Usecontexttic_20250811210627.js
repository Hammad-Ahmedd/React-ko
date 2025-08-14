import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Usecontexttic = createContext({
    boxs: {
        id: 1,
        checkBox:false,
        boxText:"X"
    },
    ClickBox:(id,box)=>{}
})

export const Usetic=(()=>{
    return useContext()
})

export const usecontextprovider=Usecontexttic.Provider;