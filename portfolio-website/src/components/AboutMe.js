/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const AboutMe = () => {
  return (
    <section id="about-me" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="mb-4">About Me</h2>
        <p className="lead">
          Hi, I'm [Your Name]. I'm a passionate software developer with a love for building
          innovative solutions. My expertise lies in [mention your skills or technologies]. 
          Let's work together to bring your ideas to life!
        </p>
        <div className="social-icons mt-4">
          <a href="#" className="mx-2"><i className="fab fa-github fa-lg"></i></a>
          <a href="#" className="mx-2"><i className="fab fa-linkedin-in fa-lg"></i></a>
          <a href="#" className="mx-2"><i className="fab fa-twitter fa-lg"></i></a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
