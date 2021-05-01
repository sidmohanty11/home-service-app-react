import React, {useContext} from 'react'
import CartIcon from '../../assets/shopping-cart.png';
import './HeaderButton.css';
import CartContext from '../../store/cart-context';

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNum, item) => {
        return curNum + item.amount;
    },0)

    return (
        <button className="button" onClick={props.onClick}>
            <span className="icon">
                <img src={CartIcon} />
            </span>
            <span>Your Cart</span>
            <span className="badge">{numberOfItems}</span>
        </button>
    )
}

export default HeaderButton;
