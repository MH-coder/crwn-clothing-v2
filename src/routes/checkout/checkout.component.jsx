import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import CheckOutItem from '../../components/checkout-item/checkout-item.component'

import './checkout.styles.scss'

const CheckOut = () => {
    const { cartItems, total } = useContext(CartContext)

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