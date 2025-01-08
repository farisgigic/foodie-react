import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
import Login from "./pages/login";
import Register from "./pages/register";
import "./styles/foodie.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login (sets isLoggedIn to true)
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  // Function to handle logout (sets isLoggedIn to false)
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/home" /> : <Login handleLogin={handleLogin} />} />
        <Route path="/home" element={isLoggedIn ? <Home handleLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/recipes" element={isLoggedIn ? <Recipes handleLogout={handleLogout} /> : <Navigate to="/" />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/home" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
