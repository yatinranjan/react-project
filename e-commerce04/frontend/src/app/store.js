import { configureStore } from '@reduxjs/toolkit'
import productReducer from "../features/Shoppingcart/productSlice";

const store=configureStore({
    reducer:{
        products:productReducer
        
    }
})
export default store;