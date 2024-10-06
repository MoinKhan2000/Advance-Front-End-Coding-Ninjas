// Hero.js
import React from 'react';

const Hero = () => {
  let user = {
    Name: "Pranav Sharad Yeole",
    Email: "pranav.shyole@gmail.com",
    Phone: "9999999999",
    Address: "Delhi, India",
  };

  return (
    <div className="hero">
      <h2>Basic Information</h2>
      <p><strong>Name:</strong> {user.Name}</p>
      <p><strong>Email:</strong> {user.Email}</p>
      <p><strong>Phone:</strong> {user.Phone}</p>
      <p><strong>Address:</strong> {user.Address}</p>
    </div>
  );
};

export default Hero;
