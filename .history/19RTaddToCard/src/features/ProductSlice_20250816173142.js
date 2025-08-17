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
                quantity: action.payload.quantity,
            }
            state.products.push(product)
        },
        removeCard: (state, action) => {
            state.products = state.products.filter((product) => product.id !== action.payload.id)
        },
        increasequantity: (state, action) => {
            // state.products.map((product) => product.id === action.payload.id ? action.payload.quantity++ : product)
            const product = state.products.find((product) => product.id === action.payload.id)
            product ? product.quantity += 1
        },
        dereasequantity: (state, action) => {
            state.products.map((product) => action.payload > 0 ? product.id === action.payload ? action.payload.quantity-- : product : product)

        },
    }
})

export const { addToCard, removeCard, increasequantity, dereasequantity } = ProductSlice.actions

export default ProductSlice.reducer