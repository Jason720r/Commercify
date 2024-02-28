import React from 'react';
import LandingImage from './Shannon.JPG'
import McLogo from './McClure.png'
import WebsiteTitle from './Title.png'
import "./Landing.css";

export const LandingPage = () => {

    return (
        <div className="landing_container">

            <img src={McLogo} alt="Web Logo" className='website_logo'/>
            <nav>
                <a href="About">About Me</a>
                <a href='Contact'>Contact Me</a>
            </nav>
            <div className='client_container'>
            {/* <img src={LandingImage} alt="Shannon" className="landing_banner" /> */}
            <div className='client_review'>"You bring a lot to the table, Shannon. Not only expertise, but a heart for healing and growth. You have a special gift to see women not just as they are, but who they can become. You gently and humbly reach inside them and pull that out."</div>
            </div>
            <div className='landing_description'>It's not just about your physical well-being, your mental health is just as important</div>
            <div className='service_container'>
                <button className='service_shannon'>Diet and Coaching</button>
                <button className='service_shannon'>Mental Health</button>
                <button className='service_shannon'></button>
            </div>
        </div>
    )
}