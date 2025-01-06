// src/pages/Recipes.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/foodie.css";

const Recipes = () => (
  <div>
    <Navbar />
    <section id="recipes">
      <div className="container">
        <div className="dropdown-section">
          <label htmlFor="category-filter">Filter Recipes by Category:</label>
          <select id="category-filter" className="form-select">
            <option value="all">All</option>
            <option value="desserts">Desserts</option>
            <option value="savory">Meals</option>
          </select>
        </div>
        <div className="recipe-section">
          <div className="recipe-card">
            <img src="https://via.placeholder.com/300x200" alt="Recipe 1" />
            <h4>Chocolate Cake</h4>
            <p>Delicious and moist chocolate cake with a creamy frosting.</p>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/300x200" alt="Recipe 1" />
            <h4>Chocolate Cake</h4>
            <p>Delicious and moist chocolate cake with a creamy frosting.</p>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/300x200" alt="Recipe 1" />
            <h4>Chocolate Cake</h4>
            <p>Delicious and moist chocolate cake with a creamy frosting.</p>
          </div>
          <div className="recipe-card">
            <img src="https://via.placeholder.com/300x200" alt="Recipe 1" />
            <h4>Chocolate Cake</h4>
            <p>Delicious and moist chocolate cake with a creamy frosting.</p>
          </div>
          {/* Add other recipes here */}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Recipes;
