import React from 'react'
import './skills.css';
import AppDesign from '../../assets/AppDesign.png';
import UXUIDesign from '../../assets/UIUX-Design.png';
import WebsiteDesign from '../../assets/Website-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'> I am a skilled and passionate web designer who've just finished my Bachelor in Software Development. I've got a base knowlegde and understanding of both front- and back-end components and I'm eager to learn even more. Here are some of the laguages, I've used in the past years:</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UXUIDesign} alt="UXUIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>React / React Native / Flutter</h2>
                    <p>These are the front-end languages, I've been utilizing in the past few years. My main use is React, which is also used in creating this portfolio.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebsiteDesign} alt="WebsiteDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Javascript / Java / Python</h2>
                    <p>I've programmed in all of these different languages for about 3 years now. Mainly using Javascript and Java for building applications and back-end functionality, while I've been using Python for developing Machine Learning algorithms used within applications.</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>PostgreSQL / Mongodb / Maven </h2>
                    <p>I've utilized PostgreSQL for database management in most of my application, where it was necessary. Otherwise I've been using Mongodb. I've also used Maven for streamlining my dependencies and for project management.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills