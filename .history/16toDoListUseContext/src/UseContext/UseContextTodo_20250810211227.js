import React, { createContext, useContext } from "react";

export const todoContext=createContext({
    todo:{
        id:1,
        todomsg:"Todo Message",
        complete:false
    },
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{},
    updateTodo:(id,todo)=>{}
})

export function usetodo(){
    return useContext(todoContext)
}