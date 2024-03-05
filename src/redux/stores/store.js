import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import { rootReducer } from "../reducers/root.reducer";
import { root } from "../sagas/root.saga";

const sagaMiddleware=createSagaMiddleware();
export const store= configureStore({
    reducer:rootReducer,
    middleware: (middleware)=>middleware().concat(sagaMiddleware),
    devTools:process.env.NODE_ENV!=='production'?true:false
})
sagaMiddleware.run(root)