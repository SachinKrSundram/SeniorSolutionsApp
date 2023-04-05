import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BloodTest from './components/BloodTest/BloodTestRemainder';
import Medication from './components/Medication/MedicationRemainder';
import MedicalHistory from './components/History/MedicalHistory';
import SeniorSocialMedia from './components/SocialMedia/SeniorSocialMedia';
import VirtualAssistant from './components/Virtual/VirtualAssistant';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}>
      <Route path="MedicationRemainder" element={<MedicationReminder />} />
      <Route path="BloodTestRemainder" element={<BloodTestReminder />} />
      <Route path="MedicalHistory" element={<MedicalHistory />} />
      <Route path="SeniorSocialMedia" element={<SeniorSocialMedia/>}/>
      <Route path="VirtualAssistant" element={<VirtualAssistant/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
