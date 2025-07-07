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
          direction="diagonal"
          borderColor="rgba(79, 70, 229, 0.2)"
          hoverFillColor="#222"
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

      <div className="events-section">
        <div className="events-background">
          <CircularText 
            text=" BUILD • CONNECT • CREATE • INNOVATE • COLLABORATE • INSPIRE • "
            onHover="speedUp"
            spinDuration={30}
            className="events-circular-text"
          />
        </div>
        <div className="events-wrapper">
          <h2 className="events-title">Events</h2>
          <div className="events-content">
            <p className="events-description">
              Join our vibrant community through twice-a-week co-hosted sessions at different locations. 
              Connect with fellow builders, share ideas, and collaborate on exciting projects.
            </p>
            
            <div className="event-details">
              <div className="event-frequency">
                <h3>Twice Weekly Sessions</h3>
                <p>Regular meetups to keep the momentum going</p>
              </div>
              <div className="event-locations">
                <h3>Different Locations</h3>
                <p>Exploring new spaces to spark creativity</p>
              </div>
            </div>

            <div className="luma-events-section">
              <h3 className="luma-title">Upcoming Events</h3>
              <div className="luma-embed-placeholder">
                {/* Luma embed will go here */}
                <p className="luma-placeholder-text">Luma calendar integration coming soon...</p>
                <div className="luma-embed-container">
                  {/* You can replace this with your actual Luma embed code */}
                  <iframe 
                    src="https://lu.ma/embed/calendar/cal-xyz/events"
                    width="100%" 
                    height="400"
                    frameBorder="0"
                    style={{border: 'none', borderRadius: '12px'}}
                    title="Luma Calendar"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 