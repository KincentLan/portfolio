import React from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import About from '../components/About';
import styled from 'styled-components';
import './App.css';

const StyledMainContainer = styled.main` 
  background-color: #084C61;
  overflow: auto;
  margin: 0;
  padding: 0;
`

function App() {
  return (
        <StyledMainContainer className="fillHeight">
            <NavBar />
            <Hero />
            <About />
        </StyledMainContainer>
  );
}

export default App;
