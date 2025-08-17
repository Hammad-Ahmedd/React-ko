import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:{
        id:1,
        productName:"",
        imgsrc:"",
        price:100,
        quitity:""
    }
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState:{}
})