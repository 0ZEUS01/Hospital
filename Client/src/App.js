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
import RDV from "./Pages/RDV";
import Visit from "./Pages/Visit";
import Paiement from "./Pages/Paiement";

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login />} />
      
        <Route path="/Home" element={<HeaderFooter><Home /></HeaderFooter>} />
        <Route path="/patients" element={<HeaderFooter><Patients/></HeaderFooter>} />
        <Route path="/RDV" element={<HeaderFooter><RDV /></HeaderFooter>} />
        <Route path="/Visit" element={<HeaderFooter><Visit/></HeaderFooter>} />
        <Route path="/Paiement" element={<HeaderFooter><Paiement/></HeaderFooter>} />
       
        <Route path="*" exact element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
