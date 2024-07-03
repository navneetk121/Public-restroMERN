import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FoodPage from "./components/FoodPage";
import BeveragesPage from "./components/BeveragesPage";
import DessertsPage from "./components/DessertsPage";

function App() {
  return (
    <Router>
      <div className="select-none">
        <div className="heading bg-black text-white py-2 text-center">Family Styled restaurant & cafe!</div>
        <Header className="static" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<FoodPage />} />
          <Route path="/beverages" element={<BeveragesPage />} />
          <Route path="/desserts" element={<DessertsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
