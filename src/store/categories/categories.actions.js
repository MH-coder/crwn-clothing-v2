import { CATEGORIES_TYPES } from "./categories.types"

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils"

export const setCategoriesMap = (categoryMap) => (
    { type: CATEGORIES_TYPES.MAP_CATEGORIES, payload: categoryMap }
)

export const fecthCategoriesStart = () => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_START, payload: null })

export const fecthCategoriesSuccess = (categoryMap) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_SUCCESS, payload: categoryMap })

export const fecthCategoriesFailed = (error) => ({ type: CATEGORIES_TYPES.FETCH_CATEGORIES_FAILED, payload: error })

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fecthCategoriesStart())

    try {
        const categoryMap = await getCategoriesAndDocuments()
        dispatch(fecthCategoriesSuccess(categoryMap))
    } catch (error) {
        dispatch(fecthCategoriesFailed(error))
    }
}