import {all,fork} from "redux-saga/effects"
import{category} from "./category.saga"
import { Product } from "./product.saga"
import { User } from "./user.saga"
import { cart } from "./cart.saga"
import { order } from "./order.saga"


export function* root(){
    yield all([
        fork(category),
        fork(Product),
        fork(User),
        fork(cart),
        fork(order)
       
    ])
}