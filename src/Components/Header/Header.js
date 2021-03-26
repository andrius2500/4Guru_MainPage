import React from 'react';

import leftSide from './images/left-side.jpg';
import rightSide from './images/right-side.jpg';
import triangle from './images/triangle.png';
import './styles/styles.css';

function Header() {
    return (
        <div>
            <div className='header'>
                <div className='header__top-img-container'>
                    <img src={triangle} alt='triangle' className="header__img header__img--on-top" />
                </div>
                <div className='header__other-img-container'>
                    <img src={leftSide} alt='first woman' className="header__img header__img--below" />
                    <img src={rightSide} alt='second woman' className="header__img" />
                </div>
            </div>
        </div>
    );
}

export default Header;