import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Index from './Components/Search/Index';
import Footer from './Components/Footer';
import HomePage from "./Components/HomePage/Index"
import Details from "./Components/PropertyDetails/Index"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "./Components/Dashboard"
import AddProperty from "./Components/Dashboard/AddProperty/AddProperty"
import Profile from "./Components/Dashboard/Profile"

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <Router>
   <Navigation/>
   <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route exact path="/search/:city" element={<Index/>}/>
      <Route exact path="/Detail/:id" element={<Details/>}/>
      <Route exact path="/Dashboard"  >
              <Route exact path="/addproperty" element={<AddProperty/>}  />
              <Route exact path="/Profile" element={<Profile/>}/>
        </Route>
      </Routes>
    
    <Footer/>
    </Router>
  
  );
}

export default App;
