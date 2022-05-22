import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux';
import { cartItemsCountSelector, isCartOpenSelector } from '../../store/cart/cart.selectors';
import { setIsCartOpen } from '../../store/cart/cart.actions';

import './cart-icon.styles.scss'

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartItemsCount = useSelector(cartItemsCountSelector)
    const isCartOpen = useSelector(isCartOpenSelector)
    // const { isCartOpen, setIsCartOpen, cartItemsCount } = useContext(CartContext)

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <div className="shopping-icon"><ShoppingBag /></div>
            <div className="item-count">{cartItemsCount}</div>
        </div>
    )
}

export default CartIcon