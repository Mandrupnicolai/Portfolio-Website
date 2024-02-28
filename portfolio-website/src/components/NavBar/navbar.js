import React from 'react';
import './navbar.css';
import Message from '../../assets/Message.png';
import Portfolio from '../../assets/Portfolio.png';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src = {Portfolio} alt = "Portfolio" className='Portfolio'/>
        <div className='desktopMenu'>
               <Link className='desktopMenuListItem'>Home</Link>
               <Link className='desktopMenuListItem'>About</Link>
               <Link className='desktopMenuListItem'>Portfolio</Link>
               <Link className='desktopMenuListItem'>Clients</Link>

        </div>
        <button className='desktopMenuBtn'>
          <img src = {Message} alt = "Message" className='desktopMenuImg' /> Contact Me</button> 
    </nav>
  )
}

export default Navbar