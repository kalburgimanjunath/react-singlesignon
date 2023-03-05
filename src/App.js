import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/signup/Login';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<Login />}></Route>
      </Routes>
    </div>
  );
}
