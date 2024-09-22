import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import OrdersPage from "./OrdersPage";
import Navbar from "./Navbar";
import CouponCard from "./CouponCard";
import Login from "./Login";
import Profile from "./Profile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/orders" element={<OrdersPage />} />
          <Route path="/coupons" element={<CouponCard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
