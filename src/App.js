import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Login, Register, Forgot, Reset, Home } from './pages/';
import { Header, Footer, Banner } from './components/';
export default function App() {
  const menu = [
    'Add Restorents',
    'Investor Relation',
    ' Who We Are',
    'Blog',
    'Work With Us',
    'Investor Relations',
    'Report Fraud',
    'Contact Us',
  ];
  const topmenu = [menu[0], menu[1], menu[7]];
  return (
    <div className="containe">
      <Header
        logo={'https://logodix.com/logo/1931250.jpg'}
        search={true}
        menus={topmenu}
      >
        <>
          <button>Signin</button>
          <button>Signup</button>
        </>
      </Header>

      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="reset" element={<Reset />}></Route>
        <Route path="forgot" element={<Forgot />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="/*" exact element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
