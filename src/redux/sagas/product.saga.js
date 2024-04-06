import { put, takeLatest } from 'redux-saga/effects'
import { ADD_PRODUCT_START, DELETE_PRODUCT_START, GET_PRODUCT_START, UPDATE_PRODUCT_START } from '../constants/product.constan ';
import { addProductError, deleteProductError, getProductError, getProductStart, getProductSuccess, updateProductError } from '../actions/product.action ';
import { addProductToFirebase, deleteProductToFirebase, getProductFromFirebase, updateProductToFirebase } from '../services/product.sevice';


function* getProduct() {
    try {
        let result = yield getProductFromFirebase();
        yield put(getProductSuccess(result))
    } catch (error) {
        yield put(getProductError(error.message))
        
    }

}

function* addProduct({ payload }) {

    try {
        yield addProductToFirebase(payload)
        yield put(getProductStart())
    } catch (error) {
        yield put(addProductError(error.message))
    }
   
}

function* deleteProduct({ payload }) {

    try {
        yield deleteProductToFirebase(payload)
        yield put(getProductStart())
    } catch (error) {
        yield put(deleteProductError(error.message))
    }
   
}

function* updateProduct({ payload }) {

    try {
        yield updateProductToFirebase(payload.Product,payload.id)
        yield put(getProductStart())
    } catch (error) {
        yield put(updateProductError(error.message))
    }
   
}



export function* Product() {
    yield takeLatest(ADD_PRODUCT_START, addProduct)
    yield takeLatest(GET_PRODUCT_START, getProduct)
    yield takeLatest(DELETE_PRODUCT_START, deleteProduct)
    yield takeLatest(UPDATE_PRODUCT_START, updateProduct)
}