import { put, takeLatest } from 'redux-saga/effects'
import { ADD_CATEGORY_START, DELETE_CATEGORY_START, GET_CATEGORY_START, UPDATE_CATEGORY_START } from "../constants/category.constan";
import { addcategoryToFirebase, deleteCategoryToFirebase, getcategoryFromFirebase, updateCategoryToFirebase } from "../services/category.sevice";
import { addCategoryError, deleteCategoryError, getCategoryError, getCategoryStart, getCategorySuccess } from '../actions/category.action';

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

function* deleteCategory({ payload }) {

    try {
        yield deleteCategoryToFirebase(payload)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(deleteCategoryError(error.message))
    }
   
}

function* updateCategory({ payload }) {

    try {
        yield updateCategoryToFirebase(payload.category,payload.id)
        yield put(getCategoryStart())
    } catch (error) {
        yield put(deleteCategoryError(error.message))
    }
   
}



export function* category() {
    yield takeLatest(ADD_CATEGORY_START, addCategory)
    yield takeLatest(GET_CATEGORY_START, getCategory)
    yield takeLatest(DELETE_CATEGORY_START, deleteCategory)
    yield takeLatest(UPDATE_CATEGORY_START, updateCategory)
}