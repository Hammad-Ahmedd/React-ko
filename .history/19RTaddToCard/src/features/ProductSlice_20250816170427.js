import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:{
        id:1,
        productName=""
        imgsrc:"",
    }
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState:{}
})