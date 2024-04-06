import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";
import { productReducer } from "./product.reducer";

 export const RootReducer=combineReducers({
    category:categoryReducer,
    product:productReducer
})