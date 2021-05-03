import React, {useContext} from 'react'
import CartIcon from '../../assets/shopping-cart.png';
import classes from './HeaderButton.module.css';
import CartContext from '../../store/cart-context';

//The header button

const HeaderButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItems = cartCtx.items.reduce((curNum, item) => {
        return +(curNum) + +(item.amount);
    },0)

    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <img src={CartIcon} />
            </span>
            <span>Your Services</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderButton;
