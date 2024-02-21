import React from 'react';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div>
      <header>
        <h1>My Portfolio</h1>
      </header>
      <main>
        <AboutMe />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer>
        <p>&copy; 2024 My Portfolio</p>
      </footer>
    </div>
  );
}

export default App;

