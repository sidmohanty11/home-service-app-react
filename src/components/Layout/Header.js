import React from 'react';
import './Header.css';
import toolsImage from '../../assets/tools.jpeg';
import HeaderButton from './HeaderButton';

const Header = (props) => {
    return (
        <>
            <header className="header">
                <h1>Jugaad</h1>
                <HeaderButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={toolsImage} alt="A table full of tools!" />
            </div>
        </>
    )
}

export default Header;
