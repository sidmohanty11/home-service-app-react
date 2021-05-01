import React from 'react';
import './HSItem.css';
import ItemForm from './ItemForm';

const HSItem = (props) => {
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
                <ItemForm />
            </div>
        </li>
    )
}

export default HSItem;
