import React, {useContext} from 'react';
import './Cart.css'
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    const totalAmt = `Rs. ${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const itemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
     };
    const itemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
     };

    const cartItems = (<ul className="cart-items">{
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
            <div className="total">
                <span>Total Amount</span>
                <span>{totalAmt}</span>
            </div>
            <div className="actions">
                <div className="spacing">
                    <button className="button--alt" onClick={props.onClose}>Close</button>
                </div>
                <div className="spacing">
                    {hasItems && <button className="button">Book</button>}
                </div>
            </div>
        </Modal>
    )
}

export default Cart;
