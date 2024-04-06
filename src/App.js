import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import StartingScreen from "./Sites/StartingScreen";
import LoginScreen from "./Sites/LoginScreen";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartingScreen />} />
        <Route path="/Loginscreen" element={<LoginScreen />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
