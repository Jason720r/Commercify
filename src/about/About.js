import "./About.css";
import React from 'react';
import Logo from './LandingLogo.png'
import HeaderImage from './Header.jpg'

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
                <div className="welcome_view">
                    <div className="welcome_box">
                        <p className="text_one">REACH YOUR GOALS</p>
                        <p className="text_two">SURPASS YOUR LIMITS</p>
                        <p className="text_three">BEAT YOUR PREVIOUS SELF</p>
                    </div>
                <img src={HeaderImage} alt="Header_image" className="header_image"/>
                <div className="scroll_down_indicator"></div>
                </div>
            </header>
            <main>
                <div className="service_view">
            <section id="services" className="services_section">
                    <h2 className="service_title">Services Offered</h2>
                    <button className="service_button">Diet and Coaching</button>
                    <p></p>
                    <button className="service_button">Custom programs designed to meet YOUR goals</button>
                    <p></p>
                    <button className="service_button">Muscle building and weight loss</button>
                </section>
                {/* <section id="about" className="about_section">
                    <h2>About Shannon's Business</h2>
                    <p>Here you can add more detailed information about the business, its mission, and what makes it special.</p>
                </section> */}
                <div className="booking">
                    <img src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGd5bSUyMGVxdWlwbWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Landing_image" className="book_image"/>
                </div>
                </div>
            </main>
        </div>
    )
}