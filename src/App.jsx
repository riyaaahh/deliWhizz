import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from './Screens/Categories';
import FoodDetails from './Screens/FoodDetails';
import Checkout from './Screens/Checkout';
import PaymentSuccess from './Screens/PaymentSuccess';
import DeliveryStatus from './Screens/DeliveryStatus';
import OrderHistory from './Screens/OrderHistory';
import OrdersUpcoming from './Screens/OrdersUpcoming';
import OrderDetails from './Screens/OrderDetails';

import Onboarding1 from './Screens/Onbaording/Onboarding1';
// import Onboarding2 from './Screens/Onboarding2';
// import Onboarding3 from './Screens/Onboarding3';
import Homepage from './Screens/Homepage';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import Onboarding from './Screens/Onbaording';
import MyProfile from './Screens/MyProfile';
function App() {

  return (
   <div>
    <Router>
        <Routes>
        <Route path="/" element={<Onboarding />} />
          <Route path="/store" element={<Home />} />
          {/* <Route path="/onboarding3" element={<Onboarding3 />} />
          <Route path="/onboarding2" element={<Onboarding2 />} /> */}
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/food-details" element={<FoodDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/delivery-status" element={<DeliveryStatus />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/orders-upcoming" element={<OrdersUpcoming />} />
          <Route path="/order-details" element={<OrderDetails />} />
          <Route path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
   </div>
  )
}

export default App
