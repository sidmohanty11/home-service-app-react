import React from 'react';
import './Cart.css'
import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = (<ul className="cart-items">{[{ id: 'c1', name: 'Maid', amount: 2, price: 300 }]
        .map(item => <li>{item.name}</li>)}</ul>);

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Amount</span>
                <span>600</span>
            </div>
            <div className="actions">
                <div className="spacing">
                    <button className="button--alt" onClick={props.onClose}>Close</button>
                </div>
                <div className="spacing">
                    <button className="button">Book</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart;
