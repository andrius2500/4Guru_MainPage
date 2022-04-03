import React from 'react';

import picture from './images/FINISH--6.jpg';
import './styles/styles.css';

function AboutUs() {
    return (
        <div className='about-us__container'>
            <div className='about-us__container--empty'></div>
            <div className='about-us__bottom'>
                <div className='about-us__img'>
                    <img src={picture} alt='a drawn picture of lady smiling ant typing' />
                </div>
                <div className='about-us__main-text'>
                    <h2>About Me</h2>
                    <p>Hey there! I'm Indre and I'm founder of 4Guru. Want to know more about me? Just click the link below!
                    </p>
                    <a href="">Read more</a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs; 