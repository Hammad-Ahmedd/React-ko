import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products: [{
        id: 1,
        productName: "",
        imgsrc: "",
        price: 100,
        quantity: 1,
    }]
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const product = {
                id: nanoid,
                productName: action.payload.pro,
                imgsrc: action.payload,
                price: action.payload,
                quantity: action.payload,
            }
            state.products.push(product)
        },
        removeCard: (state, action) => {
            state.products.filter((product) => product.id !== action.payload)
        },
        increasequantity: (state, action) => {
            state.products.map((product) => product.id === action.payload ? action.payload++ : product)
        },
        dereasequantity: (state, action) => {
            state.products.map((product) => action.payload > 0 ? product.id === action.payload ? action.payload++ : product : product)

        },
    }
})

export const { addToCard, removeCard, increasequantity, dereasequantity } = ProductSlice.actions

export default ProductSlice.reducer