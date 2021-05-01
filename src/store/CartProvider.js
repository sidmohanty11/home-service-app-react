import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTA = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTA
        };
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.items.concat();
    }
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

    const addItemToCart = (item) => {
        dispatchCart({ type: 'ADD', item: item });
     };
    const removeItemFromCart = (id) => {
        dispatchCart({ type: 'REMOVE', id: id });
     };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart,
    }

    return (
        <CartContext.Provider value={cartContext}>
        {props.children}
        </CartContext.Provider>
    )
};

export default CartProvider;