import React, { useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/foodie.css";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";
import picture4 from "../assets/picture4.jpg";
import picture5 from "../assets/picture6.jpg";
import picture6 from "../assets/picture7.jpg";


const Recipes = () => {
  const [filter, setFilter] = useState("all");

  // Define recipes with a category
  const recipes = [
    { id: 1, name: "Cookie Bliss", category: "desserts", img: picture1, description: "Discover the ultimate recipe for soft, chewy, and irresistible chocolate chip cookies." },
    { id: 2, name: "Easy Chocolate Tiramisu", category: "desserts", img: picture2, description: "A quick and decadent twist on the classic tiramisu, ready to enjoy in just 20 minutes." },
    { id: 3, name: "Pan Fried Ribeye", category: "savory", img: picture3, description: "Delicious and moist pan fried ribeye." },
    { id: 4, name: "Lemon Cheesecake Bites", category: "desserts", img: picture4, description: "Tangy and creamy mini lemon cheesecakes, perfect for any occasion." },
    { id: 5, name: "Stuffed Shells", category: "savory", img: picture6, description: "Fast Stuffed shells with ground beef recipe." },
    { id: 6, name: "French Onion ", category: "savory", img: picture5, description: "French onion stuffed potatoes." },
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