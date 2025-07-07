import React from 'react';
import CircularText from './CircularText';
import ScrollVelocity from './ScrollVelocity';
import Squares from './Squares';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="main-title">Buildathon</h1>
        <div className="circular-text-overlay">
          <CircularText
            text=" GENZ 5-9 QUIT CLUB "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
        </div>
      </div>
      
      <div className="mission-section">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal'
          borderColor='rgba(79, 70, 229, 0.2)'
          hoverFillColor='#222'
          className="squares-background"
        />
        <div className="mission-wrapper">
          <h2 className="mission-title">Our Mission</h2>
          <div className="mission-content">
            <p className="mission-text">
              We believe in empowering the next generation of builders, creators, and visionaries. 
              Our platform connects passionate individuals who are ready to turn their ideas into reality.
            </p>
            
            <div className="scroll-velocity-section">
              <ScrollVelocity
                texts={['for developers, programmers, visionaries, designers.', 'building crypto, AI agents, clothing line, media pod, health tech, SaaS.']} 
                velocity={50} 
                className="custom-scroll-text"
                numCopies={15}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 