import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AppointmentHistory from './pages/AppointmentHistory';
import PatientDetails from './pages/PatientDetails';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/history" element={<AppointmentHistory />} />
              <Route path="/patient/:id" element={<PatientDetails />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
