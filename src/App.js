import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';


// pages
import About from './pages/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
 <Routes>
 <Route path="/home" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/signup" element={<SignUp />} />
 <Route path="/signin" element={<SignIn />} />
 <Route path="*" element={<Home />} />
</Routes>
  );
}

export default App;
