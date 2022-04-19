import React from "react";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Patients from "./Pages/Patients";
import HeaderFooter from './compenent/HeaderFooter'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/Home" element={<HeaderFooter><Home /></HeaderFooter>} />

        <Route path="/patients" element={<HeaderFooter><Patients/></HeaderFooter>} />

        <Route path="/login" element={<Login />} />
        <Route path="*" exact element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
