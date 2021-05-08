import React from 'react';

import logo from './images/4guru.svg';

import './styles/styles.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__main-info'>
                    <div className='footer__logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div>
                        <p>Vilnius, Lietuva, Taikos g. 150-12 LT-11111</p>
                        <p>111-111-111</p>
                        <p>info@4guru.com</p>
                    </div>
                    <div>
                        <p>Subscribe to our newsletter</p>
                    </div> 
                </div>
                <div className='footer__rights'>

                </div>
            </div>
        </div>
    );
}

export default Footer;