import React from 'react';

import picture from './images/FINISH--6.jpg';
import './styles/styles.css';

function AboutUs() {
    return (
        <div className='about-us'>
            <div className='about-us__container'>
                {/* <div className='about-us__top'>
                    <h2>About US</h2>
                    <p>Learn how we helped our several clients grow their businesses online. </p>
                </div> */}
                <div className='about-us__bottom'>
                    <div className='about-us__img'>
                        <img src={picture} alt='a drawn picture of lady smiling ant typing' />
                    </div>
                    <div className='about-us__main-text'>
                        <h3>Reasons for choosing us</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Ipsum.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, Ipsum.
                        </p>
                        <a href="">Read more</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs; 