import React, { createContext } from "react";

export const todoContext=createContext({
    toDo:{
        id:1,
        todomsg:""
    }
})