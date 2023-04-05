import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import MedicationReminder from './components/Medication/MedicationRemainder';
import BloodTestReminder from './components/BloodTest/BloodTestRemainder';
import MedicalHistory from './components/History/MedicalHistory';
import SeniorSocialMedia from './components/SocialMedia/SeniorSocialMedia';
import VirtualAssistant from './components/Virtual/VirtualAssistant';

export default function App() {
  return (
    <Router>
      <div className="container">
        <h1>Welcome to Our Senior Solutions App</h1>
        <Routes>
          <Route path="/MedicationRemainder" element={<MedicationReminder />} />
          <Route path="/BloodTestRemainder" element={<BloodTestReminder />} />

          <Route path="/MedicalHistory" element={<MedicalHistory />} />

          <Route path="/SeniorSocialMedia" element={<SeniorSocialMedia />} />

          <Route path="/VirtualAssistant" element={<VirtualAssistant />} />
        </Routes>
        <div className="solution">
          <h2>Medication Reminder</h2>
          <p>
            A mobile app that can remind seniors to take their medicines on
            time.
          </p>
          <button><Link to={"/MedicationRemainder"}>Open...</Link></button>
        </div>
        <div className="solution">
          <h2>Blood Test Reminder</h2>
          <p>An app that reminds seniors to schedule regular blood tests.</p>
          <button><Link to={"/BloodTestRemainder"}>Open...</Link></button>
        </div>
        <div className="solution">
          <h2>Senior-Friendly Social Media Platform</h2>
          <p>A social media platform designed specifically for older adults.</p>
          <button><Link to={"/SeniorSocialMedia"}>Open...</Link></button>
        </div>
        <div className="solution">
          <h2>Personal Emergency Response System</h2>
          <p>
            A wearable device or mobile app that can alert emergency services
            and loved ones.
          </p>
          <button><Link to={"/MedicalHistory"}>Open...</Link></button>
        </div>
        <div className="solution">
          <h2>Virtual Personal Assistant</h2>
          <p>
            An AI-powered virtual assistant that can help seniors with daily
            tasks.
          </p>
          <button><Link to={"/VirtualAssistant"}>Open...</Link></button>
        </div>
      </div>
    </Router>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
