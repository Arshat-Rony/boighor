import React from 'react';
import './Header.css'

const Header = () => {
    return (

        <header>
            <nav>
                <h1>BoiGhor</h1>
                <div className="menu">
                    <a href="/home">Home</a>
                    <a href="/about">About</a>
                    <a href="/liked">Loved</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
        </header>

    );
};

export default Header;