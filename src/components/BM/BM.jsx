import React from 'react';
import './BM.css';

const BridesmaidCard = ({ image, name, title }) => {
  return (
    <div className="bridesmaid-card">
      <img src={image} alt={name} className="bridesmaid-image" />
      <h3 className="bridesmaid-name">{name}</h3>
      <p className="bridesmaid-title">{title}</p>
    </div>
  );
};

const BM = () => {
  return (
    <div className="bridesmaids-section">
      <h2 className="bridesmaids-title">BRIDESMAIDS</h2>
      <div className="bridesmaids-container">
        <BridesmaidCard
          image="bridesmaid1.jpg"
          name="Jane Doe"
          title="Maid of Honor"
        />
        <BridesmaidCard
          image="bridesmaid2.jpg"
          name="Emily Smith"
          title="Bridesmaid"
        />
        <BridesmaidCard
          image="bridesmaid3.jpg"
          name="Sarah Johnson"
          title="Bridesmaid"
        />
      </div>
    </div>
  );
};

export default BM;