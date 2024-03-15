import { combineReducers } from "@reduxjs/toolkit";
import { categoryReducer } from "./category.reducer";

 export const RootReducer=combineReducers({
    category:categoryReducer
})