import React, {useContext} from 'react';
import './HSItem.css';
import ItemForm from './ItemForm';
import CartContext from '../../store/cart-context';

const HSItem = (props) => {
    const cartCtx = useContext(CartContext);
    const addToCart = amt => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amt
        });
    };

    return (
        <li className="hs">
            <div>
                <h3>{props.name}</h3>
                <div className="description">
                    {props.description}
                </div>
                <div className="price">
                    &#8377; {props.price.toFixed(2)}
                </div>
            </div>
            <div>
                <ItemForm id={props.id} onAddToCart={addToCart} />
            </div>
        </li>
    )
}

export default HSItem;
