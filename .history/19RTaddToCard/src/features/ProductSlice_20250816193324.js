import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cardSwitcher: false
}

export const ProductSlice = createSlice({
    name: "Products",
    initialState,
    reducers: {
        addToCard: (state, action) => {
            const product = {
                id: action.payload.id,
                productName: action.payload.productName,
                imgsrc: action.payload.imgsrc,
                price: action.payload.price,
                quantity: action.payload.quantity || 1,
            }
            const exist = state.products.some((p) => p.id === product.id);
            if (exist) {
                state.products.map((p) => p.id === product.id ? p.quantity += 1 : p);
            } else {
                state.products.push(product)
            }
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
        cardSwitcher: (state, action) => {
            state.cardSwitcher ? false : true
        }
    }
})

export const { addToCard, removeCard, increasequantity, dereasequantity ,} = ProductSlice.actions

export default ProductSlice.reducer