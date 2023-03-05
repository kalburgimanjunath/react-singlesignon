import React from 'react';
import { Link } from 'react-router-dom';
export default function Forgot() {
  return (
    <div>
      <h1>Forgot</h1>
      <Link to="/register">Register</Link>/<Link to="/reset">Reset</Link>
    </div>
  );
}
