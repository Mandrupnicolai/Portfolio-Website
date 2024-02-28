import React from 'react'
import './skills.css';
import AppDesign from '../../assets/AppDesign.png';
import UXUIDesign from '../../assets/UIUX-Design.png';
import WebsiteDesign from '../../assets/Website-design.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDescription'> I am a skilled and passionate web designer with experience.</span>
        <div className='skillBars'>
            <div className='skillBar'>
                <img src={UXUIDesign} alt="UXUIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={WebsiteDesign} alt="WebsiteDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
            <div className='skillBar'>
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>This is a demo text</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills