// src/pages/Login.js
import React from "react";
import Navbar from "../components/navbar"; // Assuming you have a Navbar component
import Footer from "../components/footer"; // Assuming you have a Footer component
import "../styles/foodie.css";

const Login = () => (
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
                                    <form>
                                        {/* Email Input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example1">
                                                Email address
                                            </label>
                                        </div>

                                        {/* Password Input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example2">
                                                Password
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-block mb-4" style={{ backgroundColor: "#4f3e2d", color: "#fff" }}>
                                            Log In
                                        </button>

                                        {/* Link to Register Page */}
                                        <div className="text-center">
                                            <p>
                                                Don't have an account? <a href="/register">Sign up</a>
                                            </p>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Login;
