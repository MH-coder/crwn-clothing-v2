import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'

import { useSelector } from 'react-redux'
import { cartItemsSelector, cartTotalSelector } from '../../store/cart/cart.selectors'

import './checkout.styles.scss'

const CheckOut = () => {

    // const { cartItems, total } = useContext(CartContext)
    const cartItems = useSelector(cartItemsSelector)
    const total = useSelector(cartTotalSelector)

    return (
        <>
            <div className="checkout-container">
                <div className="checkout-header">
                    <div className="header-block"><span>Product</span></div>
                    <div className="header-block"><span>Description</span></div>
                    <div className="header-block"><span>Quantity</span></div>
                    <div className="header-block"><span>Price</span></div>
                    <div className="header-block"><span>Remove</span></div>
                </div>
                {
                    cartItems.map((item) => (<CheckOutItem key={item.id} cartItem={item} />))
                }
                <div className='total'>Total: ${total}</div>
            </div>

        </>
    )
}

export default CheckOut