import { createAction, createSlice } from "@reduxjs/toolkit"



export const NameSlice = createSlice({
    name: "Name",
    initialState: { firstname: "Hammad" },
    reducers: {
        addname: (state, action) => {
            state.firstname = action.payload
        }
    }
})

export const { addname } = NameSlice.actions

export default NameSlice.reducer