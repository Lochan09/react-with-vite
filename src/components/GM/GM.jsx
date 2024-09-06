import React from "react";
import "./GM.css";

const GroomsmenCard = ({ image, name, title }) => {
  return (
    <div className="groomsmen-card">
      <img src={image} alt={name} className="groomsmen-image" />
      <h3 className="groomsmen-name">{name}</h3>
      <p className="groomsmen-title">{title}</p>
    </div>
  );
};

const GM = () => {
  return (
    <div className="groomsmen-section">
      <h2 className="groomsmen-title">GROOMSMEN</h2>
      <div className="groomsmen-container">
        <GroomsmenCard
          image="groomsmen1.jpg"
          name="John Doe"
          title="Best Man"
        />
        <GroomsmenCard
          image="groomsmen2.jpg"
          name="Jane Doe"
          title="Groomsman"
        />
        <GroomsmenCard
          image="groomsmen3.jpg"
          name="Bob Smith"
          title="Groomsman"
        />
      </div>
    </div>
  );
};

export default GM;