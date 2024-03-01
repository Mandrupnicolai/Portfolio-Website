import React, { useState } from 'react';
import './navbar.css';
import Message from '../../assets/Message.png';
import Portfolio from '../../assets/Portfolio.png';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className='navbar'>
        <img src = {Portfolio} alt = "Portfolio" className='Portfolio'/>
        <div className='desktopMenu'>
               <Link activeClass='active' to='Intro' spy= {true} smooth= {true} offset= {-100} duration={500} className='desktopMenuListItem'>Home</Link>
               <Link activeClass='active' to='skills' spy= {true} smooth= {true} offset= {-100} duration={500}className='desktopMenuListItem'>About</Link>
               <Link activeClass='active' to='works' spy= {true} smooth= {true} offset= {-100} duration={500}className='desktopMenuListItem'>Portfolio</Link>
               <Link activeClass='active' to='clients' spy= {true} smooth= {true} offset= {-100} duration={500}className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() =>{
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
          <img src = {Message} alt = "Message" className='desktopMenuImg' /> Contact Me</button> 

        <img src = {menu} alt = "Menu" className='mobMenu' onClick ={()=> setShowMenu(!showMenu)}/>
        <div className='navMenu' style={{display: showMenu ? 'flex' : 'none'}}>
               <Link activeClass='active' to='Intro' spy= {true} smooth= {true} offset= {-100} duration={500} className='listItem' onClick ={()=> setShowMenu(false)}>Home</Link>
               <Link activeClass='active' to='skills' spy= {true} smooth= {true} offset= {-100} duration={500}className='listItem' onClick ={()=> setShowMenu(false)}>About</Link>
               <Link activeClass='active' to='works' spy= {true} smooth= {true} offset= {-100} duration={500}className='listItem' onClick ={()=> setShowMenu(false)}>Portfolio</Link>
               <Link activeClass='active' to='clients' spy= {true} smooth= {true} offset= {-100} duration={500}className='listItem' onClick ={()=> setShowMenu(false)}>Clients</Link>
               <Link activeClass='active' to='contact' spy= {true} smooth= {true} offset= {-100} duration={500}className='listItem' onClick ={()=> setShowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar