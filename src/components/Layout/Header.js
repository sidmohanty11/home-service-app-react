import React from 'react';
import classes from './Header.module.css';
import toolsImage from '../../assets/tools.jpeg';
import HeaderButton from './HeaderButton';

//The top nav bar is <header>
//The background image is toolsImage

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>Jugaad</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={toolsImage} alt="A table full of tools!" />
            </div>
        </>
    )
}

export default Header;
