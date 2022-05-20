import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { useSelector } from 'react-redux'
import { currentUserSelector } from '../../store/user/user.selectors';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from '../../utils/firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component';

import './navigation.styles.scss'

const Navigation = () => {
    const currentUser = useSelector(currentUserSelector)
    const { isCartOpen } = useContext(CartContext)

    return (
        <>
            <div className="navigation">
                <Link className='logo-container' to='/'><CrownLogo /></Link>
                <div className="nav-links-container">
                    <Link className='nav-link' to='/shop'>Shop</Link>

                    {
                        currentUser ? (<span className='nav-link' onClick={signOutUser}>Sign Out</span>) : (<Link className='nav-link' to='/auth'>Sign In</Link>)
                    }

                    <CartIcon />
                </div>
                {(isCartOpen && <CartDropDown />)}
            </div>
            <Outlet />
        </>
    )
}

export default Navigation