import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:{
        id:1,
        imgsrc:","
    }
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState:{}
})