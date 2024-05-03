/*
  I would change React files to have the .jsx extension instead of .js, this is
  so that's easier to differentiate between JSX files from regular JavaScript
  files.
*/
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Sites/styles.css";
import ForgotForm from "./Sites/ForgotForm";
import LoginScreen from "./Sites/LoginScreen";
import StartingScreen from "./Sites/StartingScreen";

/*
  Here I'm using arrow function syntax for defining the function, this syntax
  is more consistent with modern JavaScript coding styles. I would recommend using
  it instead of the regular function syntax. :)
*/
const App = () => {
  /*
    Couldn't see the reason for useLocation(), the functionality with the animations
    stays the same without it in this case. I'll leave it here anyways.
  */
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<StartingScreen />} />
        <Route path="/Loginscreen" element={<LoginScreen />} />
        <Route path="/ForgotForm" element={<ForgotForm />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
