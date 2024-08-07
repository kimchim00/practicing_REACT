import React from "react";
import "./About.css";
import Img from "../../assets/avatar-3.svg"
import AboutBox from "./AboutBox";

const About = () => {
    return (
        <section className="about container section" id="about">
            <h2 className="section__title">
                About Me
            </h2>

            <div className="about__container grid">
                <img src={Img} alt="" className="about__img" />
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description"><b>HI! I'M KIMIA MASHHADIZADEH</b><br/><br/>
I AM A SELF-TAUGHT GRAPHIC DESIGNER
BASED IN IRAN. I AM CURRENTLY PURSING
A DEGREE IN FRONTEND AND DESIGNING
WEB .MY STUDY FEILD IS COMPUTER SCIENCE
 BACHLEAR DEGREE.</p>
                        <a href="" className="btn">Downlaod CV</a>
                    </div>


                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">FRONTEND DEVELOPER</h3>
                                <span className="skills__number ">75%</span>
                                
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI-Ux DESIGNER</h3>
                                <span className="skills__number ">70%</span>
                                
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui-ux"></span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">WE WILL ACHIEVE MORE!</h3>
                                <span className="skills__number ">...</span>
                                
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ach"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutBox/>
        </section>
    )
}

export default About