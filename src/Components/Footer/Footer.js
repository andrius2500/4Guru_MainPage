import React from 'react';

import logo from './images/4guru-stretched.jpg';

import './styles/styles.css';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__main-info'>
                    <div className='footer__logo'>
                        <img src={logo} alt='logo'/>
                    </div>
                    <div className='footer__contact-info'>
                        <p>Vilnius, Lietuva, Taikos g. 150-12 LT-11111</p>
                        <p>111-111-111</p>
                        <p>info@4guru.com</p>
                    </div>
                    <div className='footer__newsletter'>
                        <p>Subscribe to our newsletter</p>
                        <div>
                            <input type='email' placeholder='Email' className='footer__input'/>
                            <button className='footer__subscribe-btn'>Subscribe</button>
                        </div>
                    </div> 
                </div>
                <div className='footer__rights'>
                    <p>@2021 | designed by akgrafika.lt</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;