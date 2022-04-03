import React from 'react';

import headerImg from './images/header-image3.jpg'
import './styles/styles.css';

function Header() {
    return (
        <div className="header__container">
            <div className="header__image-placeholder">
                <img src={headerImg} alt="header image" class="header__background-img"/>
            </div>               
            <div className="header__text-placeholder">
                <h1>4Guru</h1>
                <h2>Where your dreams becomes reality</h2>
            </div>
        </div>
    );
}

export default Header;