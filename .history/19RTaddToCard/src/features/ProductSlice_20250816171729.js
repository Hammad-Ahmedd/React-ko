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
                productName: action.payload,
                imgsrc: action.payload,
                price: action.payload,
                quantity: action.payload,
            }
            state.product.push(products)
        },
        removeCard: (state, action) => { },
        increasequantity: (state, action) => { },
        dereasequantity: (state, action) => { },
    }
})

export const { addToCard, removeCard, increasequantity, dereasequantity } = ProductSlice.actions

export default ProductSlice.reducer