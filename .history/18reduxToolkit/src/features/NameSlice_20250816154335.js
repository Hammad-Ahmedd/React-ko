import { createAction, createSlice } from "@reduxjs/toolkit"



export const NameSlice = createSlice({
    name: "Name",
    initialState: { firstname: "Hammad" },
    reducers: {
        addname: (state, action) => {
            const name = action.payload;
            state.firstname = name
        }
    }
})

export const {addname}=NameSlice.actions

export cons