import React from 'react';
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login</Link>/<Link to="/forgot">Forgot</Link>
    </div>
  );
}
