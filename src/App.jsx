import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home"
import Categories from './Screens/Categories';
import FoodDetails from './Screens/FoodDetails';
function App() {

  return (
   <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/food-details" element={<FoodDetails />} />
        </Routes>
      </Router>
   </div>
  )
}

export default App
