import {all,fork} from "redux-saga/effects"
import{category} from "./category.saga"
import { Product } from "./product.saga"

export function* root(){
    yield all([
        fork(category),
        fork(Product)
    ])
}