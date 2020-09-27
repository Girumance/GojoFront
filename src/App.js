import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Index from './Components/Search/Index';
import Footer from './Components/Footer';
import HomePage from "./Components/HomePage/Index"
import Details from "./Components/PropertyDetails/Index"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <Router>
   <Navigation/>
   <Switch>
      <Route exact path="/" component={HomePage}/>
      <Route exact path="/search" component={Index}/>
      <Route exact path="/Detail/:id" component={Details}/>
   </Switch>
    
    <Footer/>
    </Router>
  
  );
}

export default App;
