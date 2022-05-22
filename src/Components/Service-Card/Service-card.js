import React from "react";

import './styles/styles.css';

const ServiceCard = (props) => {
    console.log(props)
    return (
        <div className="service-card--container">
            <h4>{props.name}</h4>
            <div className="service-card-img--container">
                <img src={props.img} alt="photo" />
            </div>
            <div className="service-card-desc--container">
                {props.description.map((desc) => {
                    return <p>{desc}</p>
                })}
            </div>
        </div>
    )
}

export default ServiceCard;