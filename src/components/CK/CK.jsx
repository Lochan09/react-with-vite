import React from 'react';
import './CK.css';
import logo from '../../assets/logo.jpg';

const CKHeader = () => {
  return (
    <div className="ck-header">
      <h1>
        <span>CECELIA</span>
        <span>&</span>
        <span>KEVIN</span>
        <br />
      </h1>
    </div>
  );
};

const WeddingDetails = () => {
  return (
    <div className="details">
      <h2>THURSDAY, SEPTEMBER 10</h2>
      <h2>2014</h2>
      <p>FIVE O'CLOCK IN THE EVENING</p>
      <h2>SHERATON TOWERS</h2>
      <p>123 LAS RAMBLAS, BARCELONA</p>
      <p>dinner + dancing to follow</p>
      <a href="#" className="button">CLICK HERE TO RSVP TODAY</a>
    </div>
  );
};

const CK = () => {
  return (
    <div className="container">
      <CKHeader />
      <p>Invite you to celebrate at their wedding</p>
      <img src={logo} alt="Wedding Invitation" className="image"/>
      <WeddingDetails />
      <br />
    </div>
  );
};

export default CK;