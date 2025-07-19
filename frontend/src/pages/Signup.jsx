// src/pages/Signup.jsx
import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', name, email, password);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold">Sign Up</h2>
      <form onSubmit={handleSignup} className="mt-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
