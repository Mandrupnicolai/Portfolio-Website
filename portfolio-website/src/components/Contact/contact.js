import React from 'react'
import './contact.css'
import Manova from '../../assets/Clients/cropped-Manova_lilla_logo.png';
import AAU from '../../assets/Clients/AAU.png';
import Educado from '../../assets/Clients/Educado.png';
import Github from '../../assets/Links/github.png';
import Instagram from '../../assets/Links/Instagram.png';
import Linkedin from '../../assets/Links/Linkedin.png';
import Twitter from '../../assets/Links/twitter.png';



const Contact = () => {
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle"> My Collaborations</h1>
            <p className="clientDescription">
                I have had the opportunity to work with a diverse group of companies within my studies. 
                Some of the notable companies I have worked with includes:
            </p>
            <div className="clientImgs">
                <img src={Manova} alt="" className="clientImg" />
                <img src={AAU} alt="" className="clientImg" />
                <img src={Educado} alt="" className="clientImg" />
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
                    <img src={Github} alt="Facebook" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact