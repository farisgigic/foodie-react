// src/pages/Home.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/foodie.css";

const Home = () => (
    <div>
        <Navbar />
        <section id="home" className="hero-section">
            <div className="container">
                <h2>Welcome to Foodie</h2>
                <p>Explore, create, and share delicious recipes. Join a community of food enthusiasts today!</p>
            </div>
        </section>
        <section id="about-us" className="about-us-section">
            <div className="container">
                <h2>About Us</h2>
                <p>At Foodie, we're passionate about bringing people together through the love of food...</p>
            </div>
        </section>
        <Footer />
    </div>
);

export default Home;
