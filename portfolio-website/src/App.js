import React from 'react';
import {Container, Title, Toolbar, Button } from './styles/app-component-styles';

const App = () => {
  return (
    <Container>
      <Toolbar>
        <Button>About Me</Button>
        <Button>Projects</Button>
        <Button>Skills</Button>
        <Button>Contact</Button>
      </Toolbar>
      <Title>Hello World</Title>
    </Container>
  );
};

export default App;
