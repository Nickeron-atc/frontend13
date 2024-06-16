//libraries
import React, {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom'

//components
import Counter from './components/Counter.jsx'
import PostItem from './components/PostItem.jsx'
import InputField from './components/InputField.jsx'
import ButtonItem from './components/ButtonItem.jsx'
import Navbar from './components/UI/Navbar/Navbar.jsx'

import AppRouter from './components/AppRouter.jsx'

//pages
import Registration from './pages/Registration.jsx'
import Authorization from './pages/Authorization.jsx'
import WorkSession from './pages/WorkSession.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'

//styles
import "./styles/App.css"

function App(inputValue) {
  
  /*
  useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);
  //*/


  /*
  <BrowserRouter>
      <Routes>
        <Route path="/registration" element={<Registration/>} />
        <Route path="/chatbot" element={<ChatBot/>} />
      </Routes>
    </BrowserRouter>
  */

  return (
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
