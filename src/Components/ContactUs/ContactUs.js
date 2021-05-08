import React from 'react';

import './styles/styles.css';
import adress from './images/adress-icon.svg';
import email from './images/email-icon.svg';
import mobile from './images/mobile-icon.svg';

import Form from '../Form/Form.js';

function ContactUs() {
    return (
        <div className='contact-us'>
            <div className='contact-us__col-left'>
                <div className='contact-us__main-text'>
                    <h2>Contact Us</h2>
                    <p>Have a project we can help with? Give us a call or reach out to us on social media</p>
                </div>
                <div className='contact-us__info'>
                    <div className='contact-us__adress-container'>
                        <div className='contact-us__adress-img'>
                            <img src={adress} alt='adress icon' className='contact-us__img'/>
                        </div>
                        <div className='contact-us__adress-info'>
                            <p className='contact-us__info-header'>Address</p>
                            <p>Vilnius, Lietuva, Taikos g. 150</p>
                        </div>
                    </div>
                    <div className='contact-us__queries-container'>
                        <div className='contact-us__queries-img'>
                            <img src={mobile} alt='mobile icon' className='contact-us__img'/>
                        </div>
                        <div className='contact-us__queries-info'>
                            <p className='contact-us__info-header'>Call for queries</p>
                            <p>111-111-111</p>
                        </div>
                    </div>
                    <div className='contact-us__email-container'>
                        <div className='contact-us__email-img'>
                            <img src={email} alt='email icon' className='contact-us__img contact-us__img--bigger'/>
                        </div>
                        <div className='contact-us__email-info'>
                            <p className='contact-us__info-header'>Email Us</p>
                            <p>info@4guru.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contact-us__col-right'>
                <Form />
            </div>
        </div>
    );
}

export default ContactUs;