import React from "react";
import { useContext } from "react";
import { createContext } from "react";

export const Usecontexttic = createContext({
    boxs: {
        checkBox: false,
        boxText: "X"
    },
    ClickBox: (box) => { }
})

export const Usetic = (() => {
    return useContext(Usecontexttic)
})

export const Usecontextprovider = Usecontexttic.Provider;