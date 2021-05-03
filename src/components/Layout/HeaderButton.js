import React, { useContext, useEffect, useState } from 'react';
import CartIcon from '../../assets/shopping-cart.png';
import classes from './HeaderButton.module.css';
import CartContext from '../../store/cart-context';

//The header button

const HeaderButton = (props) => {
    const [btnBump, setBtnBump] = useState(false);
    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;
    const numberOfItems = items.reduce((curNum, item) => {
        return +(curNum) + +(item.amount);
    }, 0);

    const btnClasses = `${classes.button} ${btnBump ? classes.bump : ''}`;

    useEffect(() => {
        if (cartCtx.items.length === 0) { return; }
        setBtnBump(true);

        const timer = setTimeout(() => { setBtnBump(false); }, 300);

        return () => {
            clearTimeout(timer);
        }
    },[items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <img src={CartIcon} />
            </span>
            <span>Your Services</span>
            <span className={classes.badge}>{numberOfItems}</span>
        </button>
    )
}

export default HeaderButton;
