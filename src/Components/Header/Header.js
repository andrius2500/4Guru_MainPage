import React from 'react';

import guruLogo from './images/4guru-test.png';
import leftImage from './images/left-side.jpg';
import rightImage from './images/right-side.jpg';
import './styles/style.css';

function Header() {
    return (
        <div>
            <div className='header'>
                <div className='header__navigation'>
                    <div className='header__logo'>
                        <img src={guruLogo} alt='Four guru logo' className='header__img'/>
                    </div>
                    <div className='header__navigation-links-container'>
                        <a href="" className='header__nav-links'>Our Services</a>
                        <a href="" className='header__nav-links'>About Us</a>
                        <a href="" className='header__nav-links'>Blog</a>
                        <a href="" className='header__nav-links'>Contact</a>
                    </div>
                </div>
                <div className="header__explore">
                    {/* <img src={leftImage} alt='Four guru logo' className=''/>
                    <img src={rightImage} alt='Four guru logo' className=''/> */}
                    <p>test</p>
                </div>
            </div>
        </div>
    );
} 

export default Header;