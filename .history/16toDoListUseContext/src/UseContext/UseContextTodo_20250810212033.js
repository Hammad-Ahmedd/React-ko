import React, { createContext, useContext } from "react";

export const TodoContext = createContext({
    todo: {
        id: 1,
        todomsg: "Todo Message",
        complete: false
    },
    addTodo: (todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { },
    updateTodo: (id, todo) => { }
})

export function Usetodo() {
    return useContext(todoContext)
}

export const todoProvider = TodoContext.pr 