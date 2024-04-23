import { put, takeLatest } from "redux-saga/effects";
import { addCartError, getCartError, getCartStart, getCartSuccess } from "../actions/cart.action";
import { ADD_CART_START,  GET_CART_START } from "../constants/cart.constan";
import { addCartToFirebase, getCartFromFirebase } from "../services/cart.sevice";


function* getCart() {
    try {
        let result = yield getCartFromFirebase();
        yield put(getCartSuccess(result))
    } catch (error) {
        yield put(getCartError(error.message))
        
    }

}

function* addCart({ payload }) {

    try {
        yield addCartToFirebase(payload)
        yield put(getCartStart())
    } catch (error) {
        yield put(addCartError(error.message))
    }
   
}





export function* cart() {
    yield takeLatest(ADD_CART_START, addCart)
    yield takeLatest(GET_CART_START, getCart)
}