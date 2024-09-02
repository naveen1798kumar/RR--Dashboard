import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch appointment history from API
    axios.get('/api/history')
      .then(response => setHistory(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Appointment History</h2>
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
          {/* {history.map(item => (
            <tr key={item.id} className="border-t">
              <td className="px-4 py-2">{item.fullname}</td>
              <td className="px-4 py-2">{item.treatment}</td>
              <td className="px-4 py-2">{item.date}</td>
              <td className="px-4 py-2">{item.time}</td>
              <td className="px-4 py-2">{item.status}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentHistory;
