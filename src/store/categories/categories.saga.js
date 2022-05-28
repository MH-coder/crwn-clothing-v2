import { all, call, put, takeLatest } from 'redux-saga/effects'

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'

import { fetchCategoriesFailed, fetchCategoriesStart, fetchCategoriesSuccess } from './categories.actions'

import { CATEGORIES_TYPES } from './categories.types'

export function* fetchCategoriesAsync() {
    try {
        const categoryMap = yield call(getCategoriesAndDocuments)
        yield put(fetchCategoriesSuccess(categoryMap))
    } catch (error) {
        yield put(fetchCategoriesFailed(error))
    }
}

export function* onCategoriesFetch() {
    yield takeLatest(CATEGORIES_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
    yield all([call(onCategoriesFetch)])
}