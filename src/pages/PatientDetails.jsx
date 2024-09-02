import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PatientDetails = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    // Fetch patient details from the API (replace with your API endpoint)
    axios.get(`/api/patient/${id}`)
      .then(response => setPatient(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Patient Details</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p><strong>Name:</strong> {patient.fullname}</p>
        <p><strong>Treatment:</strong> {patient.treatment}</p>
        <p><strong>Date of Birth:</strong> {patient.dob}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
        <p><strong>Address:</strong> {patient.address}</p>
        <p><strong>Medical History:</strong></p>
        <ul className="list-disc pl-5">
          {patient.medicalHistory.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PatientDetails;
