import React from 'react';
import classes from './HSSummary.module.css';

//The middle summary portion containing the motto of Jugaad!

const HSSummary = () => {
    return (
        <div className={classes.summary}>
            <h2>Any Home Service? Jugaad has it!</h2>
            <p>No more fighting with the plumber who doesn't pick up your call!</p>
            <p>Jugaad has organizations or individual people
                who are verified and will provide you with best service.</p>
        </div>
    )
}

export default HSSummary;
