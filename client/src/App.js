import React from 'react'
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Login from './components/Login';
import Signup from './components/Signup';

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
      </Routes>




    </>
  )
}

export default App