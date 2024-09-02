import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointment data from the API (replace with your API endpoint)
    axios.get('/api/appointments')
      .then(response => setAppointments(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointments Overview</h2>
      <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
        <thead>
          <tr>
            <th className="px-4 py-2">Patient Name</th>
            <th className="px-4 py-2">Treatment</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Time</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* {appointments.map(appointment => (
            <tr key={appointment.id} className="border-t">
              <td className="px-4 py-2">{appointment.fullname}</td>
              <td className="px-4 py-2">{appointment.treatment}</td>
              <td className="px-4 py-2">{appointment.date}</td>
              <td className="px-4 py-2">{appointment.time}</td>
              <td className="px-4 py-2">{appointment.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
