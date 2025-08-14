import React from "react";
import { createContext } from "react";

export const Usecontexttic = createContext({
    boxs: {
        id: 1,
        checkBox:false,
        boxText:"X"
    },
    ClickBox:(id,box)=>{}


})