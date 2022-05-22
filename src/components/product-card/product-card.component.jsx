import Button from '../button/button.component'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { useDispatch } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.actions';

import { useSelector } from 'react-redux';
import { cartItemsSelector } from '../../store/cart/cart.selectors';

import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;

    const dispatch = useDispatch()
    const cartItems = useSelector(cartItemsSelector)

    // const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return (
        <div className="product-card-container">
            <img src={imageUrl} />
            <div className="footer">
                <div className="name">{name}</div>
                <div className="price">{price}</div>
            </div>
            <Button buttonType={'inverted'} onClick={addProductToCart}>Add To Cart</Button>
        </div>
    )
}

export default ProductCard;