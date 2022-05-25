import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useSelector } from "react-redux";
import { categoriesMapSelector, categoriesIsLoadingSelector } from "../../store/categories/categories.selectors";

import Spinner from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(categoriesMapSelector)
    const isLoading = useSelector(categoriesIsLoadingSelector)

    return (
        <>
            {
                isLoading ? <Spinner /> :
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return <CategoryPreview key={title} title={title} products={products} />
                    })
            }

        </>
    )
}

export default CategoriesPreview;