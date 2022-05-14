import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <div className="shopping-icon"><ShoppingBag /></div>
            <div className="item-count">{cartItemsCount}</div>
        </div>
    )
}

export default CartIcon