import React from 'react';
import './App.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to our senior solutions app</h1>
      <div className="solution">
        <h2>Medication Reminder App</h2>
        <p>A mobile app that can remind seniors to take their medicines on time.</p>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Blood Test Reminder</h2>
        <p>An app that reminds seniors to schedule regular blood tests.</p>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Senior-Friendly Social Media Platform</h2>
        <p>A social media platform designed specifically for older adults.</p>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Personal Emergency Response System</h2>
        <p>A wearable device or mobile app that can alert emergency services and loved ones.</p>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Virtual Personal Assistant</h2>
        <p>An AI-powered virtual assistant that can help seniors with daily tasks.</p>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default HomePage;
