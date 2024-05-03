/*
  I changed the order of the imports, so that first we import packages and then
  your project files, it might not make sense right now, but when the project gets
  bigger, it'll be a lot easier to manage things when the imports have some kind of
  order.
*/
/*
  Changes in this file, StartingScreen.jsx:
    - Merged the two components, according to good standards we should have
    one component per file.
    - Removed unnecessary code that wasn't contributing to the functionality.
*/
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./styles.css";

const StartingScreen = () => {
  const navigate = useNavigate(); // Hook to navigate

  useEffect(() => {
    const handleInteraction = () => {
      navigate("/Loginscreen");
    };

    // Add event listeners for key press and mouse click
    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    // Cleanup function for removing event listeners
    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [navigate]); // Dependency array

  return (
    <div role="button">
      <div className="Diary">
        <header className="Diary-header">
          <div className="diary-content">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              This is my first diary.
            </motion.h1>
          </div>
          <div className="Blink">
            <h6>Press any key or click to continue...</h6>
          </div>
        </header>
      </div>
    </div>
  );
};

export default StartingScreen;
