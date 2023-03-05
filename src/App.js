import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, Forgot, Reset } from './pages/';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="reset" element={<Reset />}></Route>
        <Route path="forgot" element={<Forgot />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/*" exact element={<Login />}></Route>
      </Routes>
    </div>
  );
}
