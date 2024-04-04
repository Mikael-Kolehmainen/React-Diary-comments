import React, { useEffect } from 'react';
import './StartingScreen.css';
import { useNavigate } from 'react-router-dom';

// Define Diary component
function Diary() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is my first diary.</h1>
        <div className="Blink">
          <h6>Press any key or click to continue...</h6>
        </div>
      </header>
    </div>
  );
}

const StartingScreen = () => {
  let navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    // Function to navigate to LoginScreen
    const navigateToLoginScreen = () => {
      navigate('/Loginscreen');
    };

    // Event listener for key press
    const handleKeyPress = (event) => {
      navigateToLoginScreen();
    };

    // Add keydown event listener
    window.addEventListener('keydown', handleKeyPress);
    
    // Cleanup function for component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [navigate]); // Dependency array

  return (
    <div onClick={() => navigate('/Loginscreen')}>
      <Diary />
    </div>
  );
};

export default StartingScreen;
