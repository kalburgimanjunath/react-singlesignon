import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, Forgot, Reset } from './pages/';
import { Header, Footer } from './components/';
export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="reset" element={<Reset />}></Route>
        <Route path="forgot" element={<Forgot />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/*" exact element={<Login />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
