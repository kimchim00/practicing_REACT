import React, { useState } from "react";
import "./Portfolio.css"
import Menu from "./Menu";

const Portfolio = () => {
    const[item,setItems] = useState(Menu);
    const filterItem = (categoryItem) =>{
        const updatedItems = Menu.filter((curElem) =>
        {
            return curElem.category === categoryItem;
        })

        setItems(updatedItems);
    }
    return (
        <section className="work container section" id="portfolio">
            <h2 className="section__title">
                RECENT WORKS
            </h2>
            
            <div className="work__filters">
                <span className="work__item" onClick={() => setItems(Menu)}>EVERYTHING</span>
                <span className="work__item " onClick={ () => filterItem ("HTML")}>HTML CSS JS</span>
                <span className="work__item" onClick={ () => filterItem ("REACT")}>REACT</span>
                <span className="work__item " onClick={ () => filterItem ("Design")}>UI-UX</span>
            </div>

            <div className="work__container grid">
                {item.map((elem) => {
                    const{id, image, title, category} =elem;
                    return(
                        <div className="work__card" key={id}>
                            <div className="work__thumbnail">
                                <img src={image} alt="" className="work__img" />
                                <div className="work__mask"></div>
                            </div>

                            <span className="work__category">{category}</span>
                            <h3 className="work__title">{title}</h3>
                            <a href="#" className="work__button"></a>
                            <i className="icon-link work__button-icon"></i>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Portfolio