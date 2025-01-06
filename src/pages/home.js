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
        <section id="user-profile">
            <div className="container">
                <h2>Your Profile</h2>
                <p>Welcome to your profile page! Here, you can manage all aspects of your account and submitted recipes.</p>
                <div className="profile-management">
                    <div className="profile-action">
                        <h4>Update Your Details</h4>
                        <p>Modify your name, email address, password, and profile picture. Keeping your information up to date helps us provide a better experience for you.</p>
                    </div>
                    <div className="profile-action">
                        <h4>Manage Your Recipes</h4>
                        <p>View, edit, or delete your submitted recipes. You can also add new recipes to share with the community.</p>
                    </div>
                    <div className="profile-action">
                        <h4>Privacy Settings</h4>
                        <p>Choose who can view your recipes, profile, and activity. You can make your account public or private, or select specific users who can access your content.</p>
                    </div>
                    <div className="profile-action">
                        <h4>View Your Activity</h4>
                        <p>Check the history of your interactions with the community, including comments, likes, and recipe ratings.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="technical-support">
            <div className="container">
                <h2>Technical Support</h2>
                <p>If you encounter any issues, we're here to help! Browse our FAQs or get in touch with our support team for assistance.</p>
                <div className="support-options">
                    <div className="support-action">
                        <h4>Frequently Asked Questions</h4>
                        <p>Check out our <a href="faq.html">FAQ page</a> for quick answers to common problems. You may find a solution to your issue without having to reach out.</p>
                    </div>
                    <div className="support-action">
                        <h4>Contact Support</h4>
                        <p>If you can't find what you're looking for in the FAQ, you can reach out to our support team via email at <a href="mailto:support@foodie.com">support@foodie.com</a>.</p>
                    </div>
                    <div className="support-action">
                        <h4>Live Chat</h4>
                        <p>For immediate assistance, try our live chat feature available on the bottom right corner of the page. Our agents are online and ready to help!</p>
                    </div>
                    <div className="support-action">
                        <h4>Submit a Ticket</h4>
                        <p>If you're facing a complex issue, you can submit a ticket through our <a href="support-ticket.html">support portal</a>. Provide details about your issue, and our team will get back to you as soon as possible.</p>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);

export default Home;
