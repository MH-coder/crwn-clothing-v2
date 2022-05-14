import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './checkout-item.styles.scss'

const CheckOutItem = ({ cartItem }) => {
    const { imageUrl, name, price, quantity } = cartItem;
    const { removeItemFromCart, addItemToCart, deleteItemFromCart } = useContext(CartContext)

    const addCartItem = () => addItemToCart(cartItem)
    const removeCartItem = () => removeItemFromCart(cartItem)
    const deleteCartItem = () => deleteItemFromCart(cartItem)

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