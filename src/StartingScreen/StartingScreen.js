import React, { useState, useEffect } from 'react';
import './StartingScreen.css';
import LoginScreen from '../LoginScreen/LoginScreen.js';
import { Route, Routes, Link } from "react-router-dom";

const StartingScreen = () => {
  useEffect(() => {
    const handleKeyPress = () => {
      <Routes>
      <Route path="/Loginscreen" element={<LoginScreen />} />
      </Routes>

    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const handleMouseClick = () => {

  };

  return (
    <div onClick={handleMouseClick}>

    </div>
  );
};

// Define Diary component
function Diary() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first diary.</h1>
        <header className="Blink">
          <h6>Press any key to continue...</h6>
        </header>
      </header>
    </div>
  );
}

export default StartingScreen;
