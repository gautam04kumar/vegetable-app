import { put, takeLatest } from 'redux-saga/effects'
import { ADD_CATEGORY_START, GET_CATEGORY_START } from "../constants/category.constan";
import { addcategoryToFirebase, getcategoryFromFirebase } from "../services/category.sevice";
import { addCategoryError, getCategoryError, getCategoryStart, getCategorySuccess } from '../actions/category.action';

function* getCategory() {
    try {
        let result = yield getcategoryFromFirebase();
        yield put(getCategorySuccess(result))
    } catch (error) {
        yield put(getCategoryError(error.message))
        
    }

}

function* addCategory({ payload }) {

    try {
        yield addcategoryToFirebase(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(addCategoryError(error.message))
    }
   
}

export function* category() {
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(GET_CATEGORY_START, getCategory)
}