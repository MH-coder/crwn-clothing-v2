import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

import CategoriesPreview from '../categories-preview/categories.preview.component'
import Category from '../category/category.component'
import './shop.styles.scss'

import { fetchCategoriesAsync } from '../../store/categories/categories.actions'

const Shop = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCategoriesAsync())
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;