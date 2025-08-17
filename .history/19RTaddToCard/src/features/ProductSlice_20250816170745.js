import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: {
        id: 1,
        productName: "",
        imgsrc: "",
        price: 100,
        quantity: 1,
    }
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        addToCard: (state, action) => { },
        removeCard: (state, action) => { },
        increase: (state, action) => { },
        addToCard: (state, action) => { },
    }
})