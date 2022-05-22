export const categoriesMapSelector = (state) => (state.categories.categoriesMap
    .reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc
    }, {})
)