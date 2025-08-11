import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import UserPage from './pages/UserPage';


function App() {

  return (
    <>
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<UserPage />} />
        </Routes>
      </div>
    </Router>

    </>
  )
}

export default App;