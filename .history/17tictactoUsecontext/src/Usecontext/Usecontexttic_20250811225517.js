import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Usecontexttic = createContext({
    boxs: {
        id:
        checkBox: true,
        boxText: ""
    },
    ClickBox: (box) => { }
})

export const Usetic = (() => {
    return useContext(Usecontexttic)
})

export const Usecontextprovider = Usecontexttic.Provider;