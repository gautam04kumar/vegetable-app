import { put, takeLatest } from "redux-saga/effects";
import { GET_ORDER_START, PLACE_ORDER_START } from "../constants/order.constan";

import { getOrderFromFirebase, placeOrderToFirebase } from "../services/order.sevice";
import { getOrderError, getOrderStart, getOrderSuccess } from "../actions/order.action";
import { getCartStart } from "../actions/cart.action";


function* getOrder() {
    try {
        let result = yield getOrderFromFirebase();
        yield put(getOrderSuccess(result))
        
    } catch (error) {
        yield put(getOrderError(error.message))
        
    }

}

function* placeOrder({ payload }) {

    try {
        yield placeOrderToFirebase(payload.order,payload.cart)
        yield put(getOrderStart())
        yield put(getCartStart())
    } catch (error) {
        yield put(getOrderError(error.message))
    }
   
}





export function* order() {
    yield takeLatest(GET_ORDER_START, getOrder)
    yield takeLatest(PLACE_ORDER_START, placeOrder)
}