// src/components/Navbar.js
import React from "react";
import "../styles/foodie.css";


const Navbar = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">Foodie</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/recipes">Recipes</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                        Join us
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/register">Signup</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/recipes">Guest</a></li>
                    </ul>
                </li>
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </nav>
);

export default Navbar;
