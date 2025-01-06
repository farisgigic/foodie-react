import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/foodie.css";

const Recipes = () => {
  const [filter, setFilter] = useState("all");

  // Define recipes with a category
  const recipes = [
    { id: 1, name: "Cookie Bliss", category: "desserts", img: "http://localhost:3000/static/media/picture1.328d05818a2ec202b079.jpg", description: "Discover the ultimate recipe for soft, chewy, and irresistible chocolate chip cookies." },
    { id: 2, name: "Easy Chocolate Tiramisu", category: "desserts", img: "http://localhost:3000/static/media/picture2.1aa9241ea743c40f7c2e.jpg", description: "A quick and decadent twist on the classic tiramisu, ready to enjoy in just 20 minutes." },
    { id: 3, name: "Pan Fried Ribeye", category: "savory", img: "http://localhost:3000/static/media/picture3.9d77dd4a393ca2585c64.jpg", description: "Delicious and moist pan fried ribeye." },
    { id: 4, name: "Lemon Cheesecake Bites", category: "desserts", img: "http://localhost:3000/static/media/picture4.c1edd0d94a2d2194aeb8.jpg", description: "Tangy and creamy mini lemon cheesecakes, perfect for any occasion." },
    { id: 5, name: "Stuffed Shells", category: "savory", img: "http://localhost:3000/static/media/picture7.f98bb5cf9287a6af6c6a.jpg", description: "Fast Stuffed shells with ground beef recipe." },
    { id: 6, name: "French Onion ", category: "savory", img: "http://localhost:3000/static/media/picture6.6890c2aca42b1fed2207.jpg", description: "French onion stuffed potatoes." },
  ];

  // Filter recipes based on selected category
  const filteredRecipes = recipes.filter(recipe => {
    if (filter === "all") return true;
    return recipe.category === filter;
  });

  return (
    <div>
      <Navbar />
      <section id="recipes">
        <div className="container">
          <div className="dropdown-section">
            <label htmlFor="category-filter">Filter Recipes by Category:</label>
            <select
              id="category-filter"
              className="form-select"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option value="all">All</option>
              <option value="desserts">Desserts</option>
              <option value="savory">Meals</option>
            </select>
          </div>
          <div className="recipe-section">
            {filteredRecipes.length > 0 ? (
              filteredRecipes.map(recipe => (
                <div key={recipe.id} className="recipe-card">
                  <img src={recipe.img} alt={recipe.name} />
                  <h4>{recipe.name}</h4>
                  <p>{recipe.description}</p>
                </div>
              ))
            ) : (
              <p>No recipes found in this category.</p>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Recipes;
