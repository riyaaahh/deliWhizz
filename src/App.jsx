import { useState } from 'react'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home"
import Categories from './Screens/Categories';
import FoodDetails from './Screens/FoodDetails';
import Checkout from './Screens/Checkout';
import PaymentSuccess from './Screens/PaymentSuccess';
import DeliveryStatus from './Screens/DeliveryStatus';
import OrderHistory from './Screens/OrderHistory';
import OrdersUpcoming from './Screens/OrdersUpcoming';
import OrderDetails from './Screens/OrderDetails';
function App() {

  return (
   <div>
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/food-details" element={<FoodDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/delivery-status" element={<DeliveryStatus />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/orders-upcoming" element={<OrdersUpcoming />} />
          <Route path="/order-details" element={<OrderDetails />} />
        </Routes>
      </Router>
   </div>
  )
}

export default App
