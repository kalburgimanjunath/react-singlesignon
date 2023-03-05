import React from 'react';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import { Login } from './pages';
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" exact component={<Login />}>
          <Login />
        </Route>
      </Routes>
    </div>
  );
}
