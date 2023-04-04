import React from 'react';
import './App.css';
import BloodTest from './components/BloodTest/BloodTestRemainder';
import Medication from './components/Medication/MedicationRemainder';
import MedicalHistory from './components/History/MedicalHistory';
import SeniorSocialMedia from './components/SocialMedia/SeniorSocialMedia';
import VirtualAssistant from './components/Virtual/VirtualAssistant';

function App() {
  return (
    <div>
      <h1>Senior Health Care</h1>
      <BloodTestReminder />
      <MedicationReminder />
      <MedicalHistory />
      <SeniorSocialMedia />
      <VirtualAssistant />
    </div>
  );
}

export default App;
