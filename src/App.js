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
import ManageProperty from "./Components/Dashboard/ManageProperty/Manage"
import {useSelector} from "react-redux"
import EditProperty from "./Components/Dashboard/EditProperty/EditProperty"
import { ThemeProvider } from '@material-ui/core';
import theme from "./theme"
function App() {
  console.log(process.env.REACT_APP_BACKEND_URL)
  const data = useSelector(state => state.userdata)
  return (

    <ThemeProvider theme={theme}>
    <Router>
   <Navigation/>
   <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route exact path="/search/:city" element={<Index/>}/>
      <Route exact path="/Detail/:id" element={<Details/>}/>
      <Route exact path="/Dashboard" element={<Profile/>} />
      <Route exact path="/Edit/:id" element={<EditProperty/>} />
      <Route exact path="/AddProperty" element={<AddProperty data={data}/>} />
      <Route exact path="/ManageProperty" element={ <ManageProperty/>} />
      </Routes>
    
    <Footer/>
    </Router>

    </ThemeProvider>
  
  );
}

export default App;
