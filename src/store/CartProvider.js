import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingCartItemIx = state.items.findIndex((it) => it.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIx];
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIx] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }      
        const updatedTA = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTA
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIx = state.items.findIndex((it) => it.id === action.id);
        const existingItem = state.items[existingCartItemIx];
        const updatedTA = state.totalAmount - existingItem.price;

        let updatedItems;
        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(i => i.id !== action.id);
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [state.items];
            updatedItems[existingCartItemIx] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTA
        };
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