import React from 'react'
import './intro.css';
import bg from '../../assets/MeWithoutBackground.png';
import btnImg from '../../assets/Black-suitcase.png';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
    <section id='Intro'>
      <div className='introContent'>
        <span className='hello'>Hello, </span>
        <span className='introText'>I'm <span className='introName'>Nicolai Mandrup</span> <br /> Website Designer</span>
        <p className='introPara'> I am a skilled web designer with experience in creating <br/> visually appealing and user-friendly websites.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire Me'className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src= {bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro;