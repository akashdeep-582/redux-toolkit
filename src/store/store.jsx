import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import productReducer from './productSlice'

const store = configureStore({
    reducer : {
        cart : cartReducer,
        //here we can add more slices and their reducers
        product: productReducer,
    }
})

export default store;