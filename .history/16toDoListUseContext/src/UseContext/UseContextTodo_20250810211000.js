import React, { createContext } from "react";

export const todoContext=createContext({
    toDo:{
        id:1,
        todomsg:"Todo Message",
        complete:false
    },
    addTodo:(todomsg)=>{},
    deleteTodo:(id)=>{}
})