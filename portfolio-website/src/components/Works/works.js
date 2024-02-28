import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/Portfolio/Portfolio1.png';
import Portfolio2 from '../../assets/Portfolio/Portfolio2.png';
import Portfolio3 from '../../assets/Portfolio/Portfolio3.png';
import Portfolio4 from '../../assets/Portfolio/Portfolio4.png';
import Portfolio5 from '../../assets/Portfolio/Portfolio5.png';
import Portfolio6 from '../../assets/Portfolio/Portfolio6.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDescription">I take pride en details and so forth this is just a demo</span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
        <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
        <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
        <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
        <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
        <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
      </div>
      <button className="worksBtn">See More</button>
    </section>
  );
}

export default Works