import React, {useContext} from 'react';
import classes from './HSItem.module.css';
import ItemForm from './ItemForm';
import CartContext from '../../store/cart-context';

//renders each <li> item to go through the database and output every <li> item

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
        <li className={classes.hs}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
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
