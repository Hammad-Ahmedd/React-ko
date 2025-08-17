import { createAction, createSlice } from "@reduxjs/toolkit"



export const NameSlice = createSlice({
    name: "Name",
    initialState: { name: "Hammad" },
    reducers: {
        addname: (state,action) => { 
             
        }
    }
})
