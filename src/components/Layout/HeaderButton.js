import React from 'react'
import CartIcon from '../../assets/shopping-cart.png';
import './HeaderButton.css';

const HeaderButton = (props) => {
    return (
        <button className="button" onClick={props.onClick}>
            <span className="icon">
                <img src={CartIcon} />
            </span>
            <span>Your Cart</span>
            <span className="badge">3</span>
        </button>
    )
}

export default HeaderButton;
