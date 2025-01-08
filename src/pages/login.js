import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed: npm install axios
import Navbar from "../components/navbar";
import Footer from "../components/footer"; // Import Footer component
import "../styles/foodie.css";

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Define errorMessage state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Reset error message before new submission

        try {
            const response = await axios.post("http://localhost:5000/login", { email, password });
            alert(response.data.message); // "Login successful"
            handleLogin(); // Trigger login state
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setErrorMessage(error.response.data.message);
            } else {
                setErrorMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div>
            <Navbar />
            <section>
                <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Welcome Back! <br />
                                    Log in to your account
                                </h1>
                                <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                    Please enter your credentials to access your account and start browsing your favorite recipes.
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form onSubmit={handleSubmit}>
                                            {errorMessage && (
                                                <div className="alert alert-danger">{errorMessage}</div>
                                            )}
                                            <div className="form-outline mb-4">
                                                <input
                                                    type="email"
                                                    id="form3Example1"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="form3Example1">
                                                    Email address
                                                </label>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form3Example2"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <label className="form-label" htmlFor="form3Example2">
                                                    Password
                                                </label>
                                            </div>

                                            <button
                                                type="submit"
                                                className="btn btn-block mb-4"
                                                style={{ backgroundColor: "#4f3e2d", color: "#fff" }}
                                            >
                                                Log In
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer /> {/* Ensure Footer is correctly imported */}
        </div>
    );
};

export default Login;
