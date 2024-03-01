import React from 'react'
import './contact.css'
import Adobe from '../../assets/Clients/adobe.png';
import Facebook from '../../assets/Clients/facebook.png';
import Google from '../../assets/Clients/google.png';
import Microsoft from '../../assets/Clients/microsoft.png';
import Instagram from '../../assets/Links/Instagram.png';
import Linkedin from '../../assets/Links/Linkedin.png';
import Twitter from '../../assets/Links/twitter.png';


const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle"> My Clients</h1>
            <p className="clientDescription">
                I have had the opportunity to work with a diverse group of companies. 
                Some of the notable companies I have worked with includes:
            </p>
            <div className="clientImgs">
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
                <img src={Google} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDescription"> Please fill out the form below to discuss any work opportunities.</span>
            <form action="" className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="email" className="email" placeholder='Your Email'/>
                <textarea className= 'msg' name="message" cols="30" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Instagram} alt="Instagram" className="link" />
                    <img src={Linkedin} alt="Linkedin" className="link" />
                    <img src={Twitter} alt="Twitter" className="link" />
                    <img src={Facebook} alt="Facebook" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact