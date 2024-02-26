import "./About.css";
import React from 'react';
import Logo from './LandingLogo.png'

export const ShannonTest = () => {


    return (
        <div className="landing_page_container">
            <header className="landing_page_header">
                <div className="container">
                    <img src={Logo} alt="Shannon's Logo" className="business_logo" />
                    <nav>
                        <a href="#about">About Me</a>
                        <a href="#services">Services</a>
                        <a href="#booking">Book Session</a>
                    </nav>
                </div>
            </header>
            <main>
                <section id="about" className="about_section">
                    <h2>About Shannon's Business</h2>
                    <p>Here you can add more detailed information about the business, its mission, and what makes it special.</p>
                </section>
                <section id="services" className="services_section">
                    <h2>Our Services</h2>
                    <p>Detailed information about the services offered.</p>
                </section>
                <div className="booking">
                    <h2>Book your first session now!</h2>
                    <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Landing_image" className="book_image"/>
                </div>
            </main>
        </div>
    )
}