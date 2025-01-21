import React from "react";
import { Link } from "react-router-dom";
import "../styles/foodie.css";

const Navbar = ({ handleLogout }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">Foodie</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/recipes">Recipes</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <button className="btn btn-outline-danger" onClick={handleLogout}>
                        Log out
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
