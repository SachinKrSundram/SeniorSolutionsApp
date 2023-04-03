import React from 'react';
import './styles.css';

function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to our senior solutions app</h1>
      <div className="solution">
        <h2>Medication Reminder</h2>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Blood Test Reminder</h2>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Senior-Friendly Social Media Platform</h2>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Personal Emergency Response System</h2>
        <button>Learn More</button>
      </div>
      <div className="solution">
        <h2>Virtual Personal Assistant</h2>
        <button>Learn More</button>
      </div>
    </div>
  );
}

export default HomePage;
