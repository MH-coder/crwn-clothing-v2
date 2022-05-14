import Button from '../button/button.component'

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import './product-card.styles.scss'

const ProductCard = ({ product }) => {
    const { imageUrl, name, price } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product)
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