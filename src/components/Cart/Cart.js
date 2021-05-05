import React, { useState, useContext } from 'react';
import classes from './Cart.module.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';

//the cart component - whole

const Cart = (props) => {
    const [checkout,setCheckout] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmt = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const itemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
     };
    const itemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };
    const orderHandler = () => {
        setCheckout(true);
    }

    const cartItems = (<ul className={classes['cart-items']}>{
        cartCtx.items.map(item =>
            <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={itemRemoveHandler.bind(null,item.id)}
            onAdd={itemAddHandler.bind(null,item)} />)}
    </ul>);

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmt}</span>
            </div>
            {checkout && <Checkout onCancel={props.onClose}/>}
            {!checkout && <div className={classes.actions}>
                <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Book</button>}
            </div>}
        </Modal>
    )
}

export default Cart;
