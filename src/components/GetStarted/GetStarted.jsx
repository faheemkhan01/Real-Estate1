import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper">
      <div className="paddings innerWidth g-container">
        <div className="flexColStart inner-container">
          <span className="primaryText">Get started with Faheem</span>
          <span className="secondaryText">
            Subscribe and find super attracitve price quotes
            <br />
            Find your Residence soon
          </span>
          <button className="button">
            <a href="mailto:k.faheem41@yahoo.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
