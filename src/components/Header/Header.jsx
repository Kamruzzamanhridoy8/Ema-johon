// eslint-disable-next-line no-unused-vars
import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'



const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className="img-logo">
                    <img src={logo}alt="" />
                </div>
                <div className="header-contant">
                    <a href="">Shop</a>
                    <a href="">Card</a>
                    <a href="">Order</a>
                    <a href="">Subscription</a>
                    <a href="">Login</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;