import React from 'react';
import LandingImage from './Shannon.JPG';
import McLogo from './McClure.png';
import NoBackground from './Background.png';
import WebsiteTitle from './Title.png';
import Kettle from './Bell.jpg';
import "./Landing.css";

export const LandingPage = () => {

    return (
        <div className="landing_container">
            <div className='nav_container'>
            <nav>
                <a href="About">About Me</a>
                <a href='Contact'>Contact Me</a>
            </nav>
            <img src={McLogo} alt="Web Logo" className='website_logo'/>
            <nav>
        
            </nav>
            <nav>
            <a href="About">Services</a>
                <a href='Contact'>Success Stories</a>
            </nav>
            </div>
            <div className='client_container'>
            <img src={LandingImage} alt="Shannon" className="landing_banner" />
            <div className='client_review'>"You bring a lot to the table, Shannon. Not only expertise, but a heart for healing and growth. You have a special gift to see women not just as they are, but who they can become. You gently and humbly reach inside them and pull that out."</div>
            </div>
            <div className='description_container'>
                <div className='description_header'>It's not just about your physical well-being, your mental health is just as important</div>
            <div className='landing_description'>Whether it be diet, coaching, or trauma, I'm here to support you through every step of your journey. Your body and mind are interconnected, and achieving balance between them is crucial for overall health. My approach is holistic, focusing on nutrition, exercise, and mental resilience to empower you to overcome challenges. Together, we'll develop a personalized plan that fits your lifestyle and goals, ensuring that you feel supported, motivated, and confident in your abilities. </div>
            </div>
            <div className="scroll_down_indicator"></div>
            <img src={Kettle} alt="Bell" className='kettle_image' />
            <div className='service_container'>
                <button className='service_shannon'>Diet and Coaching</button>
                <button className='service_shannon'>Mental Health</button>
                <button className='service_shannon'></button>
            </div>
        </div>
    )
}