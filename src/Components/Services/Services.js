import React from 'react';
import serviceDescription from './service-descriptions';
import ServiceCard from '../Service-Card/Service-card';

import './styles/styles.css';

const Services = () => {
    const serviceCards = serviceDescription.map(card => {
        return <ServiceCard key={card.id} id={card.id} name={card.name} img={card.img} description={card.description} />
    })

    return (
        <div className='our-services'>
            <div className='our-services__container'>
                <div className='our-services__top'>
                    <h2>My Services</h2>
                    <p>Maybe you’re just starting up? Or maybe you are already running stressful daily tasks and you’re feeling that you have too much on your plate? Then it’s time to save yourself some time, outsource tasks, grow and increase your potential by picking one of these offers</p>
                </div>
                <div className='our-services__categories'>
                    {serviceCards}
                </div>
            </div>

        </div>
    );
}

export default Services;