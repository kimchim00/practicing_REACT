import React from "react";


const Card = (props) => {
    return (
        <div className="timieline__item">
            <i className={props.icon}> </i>
            <span className="timeline__title">{props.title}</span>
            <h4 className="timeline__data">{props.year}</h4>
            <p className="timeline__text">{props.desc}</p>
        </div>
    )
}

export default Card