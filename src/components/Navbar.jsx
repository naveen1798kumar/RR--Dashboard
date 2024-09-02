import React from 'react';

const Navbar = () => {
  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between">
      <h1 className="font-bold text-2xl  text-white"
          style={{ textShadow: "2px 2px 2px rgba(0,0,0,0.7)" }}>RR Hair Clinic</h1>
      <h1 className="text-lg">Admin Dashboard</h1>
    </div>
  );
};

export default Navbar;
