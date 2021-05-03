import React, {useRef, useState} from 'react';
import Input from '../UI/Input';
import classes from './ItemForm.module.css';

//The add button which is connected to the cart button

const ItemForm = (props) => {
    const amountInputRef = useRef();
    const [amountIsValid, setAmountIsValid] = useState(true);

    const submitHandler = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmount);
    };

    return (
        <form className={classes.form}>
            <Input ref={amountInputRef} label="Men needed" input={{type:'number',id:'amount_'+props.id,min:'1',max:'5',step:'1',defaultValue:'1'}} />
            <button onClick={submitHandler}>Add</button>
            {!amountIsValid && <p>Please enter valid input!</p>}
        </form>
    )
}

export default ItemForm;
