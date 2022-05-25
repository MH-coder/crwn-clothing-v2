import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"

import { categoriesMapSelector, categoriesIsLoadingSelector } from '../../store/categories/categories.selectors'

import './category.styles.scss'

import Spinner from "../../components/spinner/spinner.component"

import ProductCard from "../../components/product-card/product-card.component"

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(categoriesMapSelector)
    const isLoading = useSelector(categoriesIsLoadingSelector)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <>
            <h2 className="category-title">{category.toUpperCase()}</h2>
            {
                isLoading ? <Spinner /> :
                    <div className="categoryy-container">
                        {
                            products && products.map((product) => (<ProductCard key={product.id} product={product} />))
                        }
                    </div>
            }

        </>
    )
}

export default Category