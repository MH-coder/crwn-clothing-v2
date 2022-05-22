import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import { useDispatch } from 'react-redux'
import { addItemToCart, removeItemFromCart, deleteItemFromCart } from '../../store/cart/cart.actions'

import { useSelector } from 'react-redux'
import { cartItemsSelector } from '../../store/cart/cart.selectors'

import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const cartItems = useSelector(cartItemsSelector)
    // const { removeItemFromCart, addItemToCart, deleteItemFromCart } = useContext(CartContext)

    const dispatch = useDispatch();

    const addCartItem = () => dispatch(addItemToCart(cartItems, cartItem))
    const removeCartItem = () => dispatch(removeItemFromCart(cartItems, cartItem))
    const deleteCartItem = () => dispatch(deleteItemFromCart(cartItems, cartItem))

    return (
        <div className="checkout-item-container">
            <div className="image-container">
                <img src={imageUrl} alt="" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeCartItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addCartItem}>&#10095;</div>
            </span>
            <span className="price">    {price}</span>
            <div className="remove-button" onClick={deleteCartItem}>&#10005;</div>
        </div>
    )
}

export default CheckOutItem