import React, { useRef, useState } from 'react';
import classes from './Checkout.module.css';

const isEmpty = value => value.trim() === '';
const isSixChars = value => value.length === 6;
const validateEmail = value => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (value.match(validRegex)) {
        return true;
    } else {
        return false;
    }
}

const Checkout = (props) => {
    const [formInputValid, setFormInputValid] = useState({
        name: true,
        email:true,
        address: true,
        city: true,
        pinCode: true
    });

    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const addressInputRef = useRef();
    const pinInputRef = useRef();
    const cityInputRef = useRef();

    const confirmCheckout = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredPin = pinInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredEmailIsValid = validateEmail(enteredEmail);
        const enteredAddressIsValid = !isEmpty(enteredAddress);
        const enteredPinIsValid = isSixChars(enteredPin);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputValid({
            name: enteredNameIsValid,
            email: enteredEmailIsValid,
            address: enteredAddressIsValid,
            city: enteredCityIsValid,
            pinCode: enteredPinIsValid
        })

        const formIsValid = enteredNameIsValid && enteredEmailIsValid && enteredAddressIsValid
            && enteredPinIsValid && enteredCityIsValid;

        if (!formIsValid) {
            return;
        }
        
    }
    return (
        <form onSubmit={confirmCheckout}>
            <div className={`${classes.control} ${formInputValid.name ? '' : classes.invalid}`}>
            <label htmlFor='name'>Your Name</label>
                <input ref={nameInputRef} id="name" type="text" />
                {!formInputValid.name && <p>Please enter a valid Name.</p>}
            </div>
            <div className={`${classes.control} ${formInputValid.email ? '' : classes.invalid}`}>
                <label htmlFor='email'>Email-Address</label>
                <input ref={emailInputRef} id="email" type="email" />
                {!formInputValid.email && <p>Please enter a valid Email-Address.</p>}
            </div>
            <div className={`${classes.control} ${formInputValid.address ? '' : classes.invalid}`}>
                <label htmlFor='address'>Address</label>
                <input ref={addressInputRef} id="address" type="text" />
                {!formInputValid.address && <p>Please enter a valid Address.</p>}
            </div>
            <div className={`${classes.control} ${formInputValid.pinCode ? '' : classes.invalid}`}>
                <label htmlFor='postal'>PIN Code</label>
                <input ref={pinInputRef} id="text" type="postal" />
                {!formInputValid.pinCode && <p>Please enter a valid PIN code.</p>}
            </div>
            <div className={`${classes.control} ${formInputValid.city ? '' : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input ref={cityInputRef} id="text" type="city" />
                {!formInputValid.city && <p>Please enter a valid City.</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    )
}

export default Checkout;
