import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing/Landing';
import SignIn from './pages/Auth/SignIn';
import Payment from './pages/Payment/Payment';
import Orders from './pages/Orders/Orders';
import Cart from './pages/Cart/Cart'



function Routing() {
  return (
        <Router>
            <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/auth" element={<SignIn/>} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart/>} />
        </Routes>
    </Router>
  )
}

export default Routing