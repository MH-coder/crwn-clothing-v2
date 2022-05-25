import { createSelector } from 'reselect'

const categoriesReducerSelector = (state) => state.categories;

export const categoriesSelector = createSelector(
    [categoriesReducerSelector],
    (categoriesSlice) => categoriesSlice.categoriesMap
)

export const categoriesMapSelector = createSelector(
    [categoriesSelector],
    (categories) => categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
)

export const categoriesIsLoadingSelector = createSelector(
    [categoriesReducerSelector],
    (categories) => (
        categories.isLoading
    )
)