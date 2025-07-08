import React from 'react';
import { Link } from 'react-router-dom';
import CircularText from './CircularText';
import ScrollVelocity from './ScrollVelocity';
import Squares from './Squares';
import './App.css';

function Home() {
  return (
    <div className="home-page">
      <div className="container" id="home">
        <div className="page-navigation">
          <a href="#home" className="page-link">Home</a>
          <a href="#mission" className="page-link">Mission</a>
          <a href="#events" className="page-link">Events</a>
          <Link to="/projects" className="page-link">Projects</Link>
        </div>
        
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
      
      <div className="mission-section" id="mission">
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

      <div className="events-section" id="events">
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
                <p className="luma-placeholder-text">
                  Join our Build-aaa-thon - a marathon for builders and founders to make 0-1 products
                </p>
                <div className="luma-embed-container">
                  <div className="join-community-section">
                    <a 
                      href="https://lu.ma/z5blpccb"
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="join-community-button"
                    >
                      Join Community
                    </a>
                    <p className="event-details-text">
                      5-9 PM Build Sessions • For builders & founders • Go from 0 to 1
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 