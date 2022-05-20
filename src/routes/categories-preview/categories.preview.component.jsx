import CategoryPreview from "../../components/category-preview/category-preview.component";

import { useSelector } from "react-redux";
import { categoriesMapSelector } from "../../store/categories/categories.selectors";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(categoriesMapSelector)
    // const { categoriesMap } = useContext(CategoriesContext)

    return (
        <>
            {
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];
                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }

        </>
    )
}

export default CategoriesPreview;