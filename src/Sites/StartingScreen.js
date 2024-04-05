import React, { useEffect, useState } from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";

// Define Diary component
function Diary() {
  return (
    <div className="Diary">
      <header className="Diary-header">
        <div className="diary-content"> {/* Container for overflow */}
          <motion.h1 
            initial={{ y: "100%" }} 
            animate={{ y: 0 }} 
            transition={{duration: 0.5, delay: 0}}
          >
            This is my first diary.
          </motion.h1>
        </div>
        <div className="Blink">
          <h6>Press any key or click to continue...</h6>
        </div>
      </header>
    </div>
  );
}

const StartingScreen = () => {
  const navigate = useNavigate(); // Hook to navigate
  const [animationPlayed, setAnimationPlayed] = useState(false); // State to track animation completion

  // Function to navigate to login screen
  const navigateToLoginScreen = () => {
    navigate('/Loginscreen');
  };

  // Event listener for key press and mouse click
  const handleInteraction = () => {
    if (!animationPlayed) {
      navigateToLoginScreen();
      setAnimationPlayed(true);
    }
  };

  // Add event listeners for key press and mouse click
  useEffect(() => {
    const keyPressHandler = (event) => {
      handleInteraction();
    };

    window.addEventListener('keydown', keyPressHandler);
    window.addEventListener('click', handleInteraction);

    // Cleanup function for removing event listeners
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
      window.removeEventListener('click', handleInteraction);
    };
  }, [navigate, animationPlayed]); // Dependency array

  return (
    <div onClick={handleInteraction} onKeyDown={handleInteraction} role="button" tabIndex={0}>
      {/* Render Diary component */}
      <Diary />
    </div>
  );
};

export default StartingScreen;
