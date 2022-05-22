import React from 'react';

import guruLogo from './images/4guru-test.png';
import './styles/style.css';

function Navbar() {
    return (
        <div>
            <div className='navbar'>
                <div className='navbar__navigation'>
                    <div className='navbar__logo'>
                        <img src={guruLogo} alt='Four guru logo' className='navbar__img'/>
                    </div>
                    <div className='navbar__navigation-links-container'>
                        <a href="" className='navbar__links'>My Services</a>
                        <a href="" className='navbar__links'>About Us</a>
                        {/* <a href="" className='navbar__links'>Blog</a> */}
                        <a href="" className='navbar__links'>Contact Me</a>
                    </div>
                </div>
            </div>
        </div>
    );
} 

export default Navbar;