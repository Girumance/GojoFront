import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Index from './Components/HomePage/Index';
import Footer from './Components/Footer';

function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  return (
    <React.Fragment>
   <Navigation/>
    <Index/>
    <Footer/>

   </React.Fragment>
  );
}

export default App;
