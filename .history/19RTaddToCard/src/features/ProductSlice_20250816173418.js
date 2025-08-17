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
                id: nanoid(),
                productName: action.payload.productName,
                imgsrc: action.payload.imgsrc,
                price: action.payload.price,
                quantity: action.payload.quantity || 1,
            }
            state.products.push(product)
        },
        removeCard: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
        },
        increasequantity: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.id)
            product ? product.quantity += 1 : product
        },
        dereasequantity: (state, action) => {
            const product = state.products.find((product) => product.id === action.payload.id)
            product ? product.quantity > 1 ? product.quantity -= 1 : product : product
        },
    }
})

export const { addToCard, removeCard, increasequantity, dereasequantity } = ProductSlice.actions

export default ProductSlice.reducer