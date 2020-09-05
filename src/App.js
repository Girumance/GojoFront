import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Index from './Components/PropertyDetails/Index';
import Footer from './Components/Footer';

function App() {
  return (
    <React.Fragment>
   <Navigation/>
    <Index/>
    <Footer/>

   </React.Fragment>
  );
}

export default App;
