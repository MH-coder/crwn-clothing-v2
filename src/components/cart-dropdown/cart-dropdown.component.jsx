import { Outlet, Link } from 'react-router-dom'

import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'

import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context'

import './cart-dropdown.styles.scss'


const CartDropDown = () => {
    const { cartItems } = useContext(CartContext)

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {
                    cartItems.map((item) => {
                        return <CartItem key={item.id} cartItem={item} />
                    })
                }
            </div>
            <Button><Link to={'/checkout'} style={{ color: 'white' }}>GO TO CHECKOUT</Link></Button>
        </div>
    )
}

export default CartDropDown