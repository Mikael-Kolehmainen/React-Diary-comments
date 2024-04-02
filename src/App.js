import { Route, Routes } from "react-router-dom";
import  StartingScreen  from './StartingScreen/StartingScreen';
import LoginScreen from './LoginScreen/LoginScreen';


function App() {
  return <Routes>
    <Route path="/" element={<StartingScreen /> }/>
    <Route path="/Loginscreen" element={<LoginScreen />} />
  </Routes>
}

export default App;