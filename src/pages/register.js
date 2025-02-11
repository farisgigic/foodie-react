// src/pages/Register.js
import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../styles/foodie.css";

const Register = () => (
    <div>
        <Navbar />
        <section>
            <div className="px-4 py-5 px-md-5 text-center text-lg-start" style={{ backgroundColor: "hsl(0, 0%, 96%)" }}>
                <div className="container">
                    <div className="row gx-lg-5 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <h1 className="my-5 display-3 fw-bold ls-tight">
                                The best offer <br />
                                for your business
                            </h1>
                            <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                                Join our vibrant community of food lovers by signing up and exploring a collection of delicious, easy-to-make recipes. Whether you're a seasoned chef or just starting, you'll find something that suits your taste and skill level. Get personalized recipe recommendations, save your favorites, and share your own culinary creations. Register now and start your journey to becoming a culinary expert today!
                            </p>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card">
                                <div className="card-body py-5 px-md-5">
                                    <form>
                                        {/* Name Inputs */}
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example1">
                                                        First name
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example2" className="form-control" />
                                                    <label className="form-label" htmlFor="form3Example2">
                                                        Last name
                                                    </label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email Input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example3" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example3">
                                                Email address
                                            </label>
                                        </div>

                                        {/* Password Input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form3Example4" className="form-control" />
                                            <label className="form-label" htmlFor="form3Example4">
                                                Password
                                            </label>
                                        </div>

                                        {/* Checkbox */}
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" defaultChecked />
                                            <label className="form-check-label" htmlFor="form2Example33">
                                                Subscribe to our newsletter
                                            </label>
                                        </div>

                                        {/* Submit Button */}
                                        <button type="submit" className="btn btn-block mb-4" style={{ backgroundColor: "#4f3e2d", color: "#fff" }}>
                                            Sign up
                                        </button>
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

export default Register;
