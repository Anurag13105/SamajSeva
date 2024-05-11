import React from 'react';
import './LandingPage.css';
// import ResponsiveSlider from '../slider/Slider.js';
const LandingPage = () => {
  return (
    <>
     {/* <ResponsiveSlider /> */}

     <div className="landing-container">
    <div className="landing1">
        <h1 class="headings">What is SamajSeva?</h1>
        <div className="text">
        <div className="left">
            {/* <h2>Discover new volunteer</h2> */}
            <p>"SamajSeva" embodies a noble endeavor dedicated to fostering community welfare through volunteerism. At its core, SamajSeva stands as a platform that bridges the aspirations of volunteers with the noble causes championed by community events and non-governmental organizations (NGOs). With a profound commitment to social impact, SamajSeva orchestrates the synergy between those with the will to serve and those in need of assistance, thereby enriching the fabric of society.</p>
            {/* <button>Explore more</button> */}
        </div>
        <div className="right">
            <img src="./Untitled design (2) 1.png" alt="" />
        </div>
        </div>
    </div>
    
    </div>

    <div className="landing-container">
    <div className="landing1">
        <h1 className='headings'>How does SamajSeva work?</h1>
        <div className="text">
        <div className="left">
            <h1>Discover new volunteer</h1>
            <p>Join SamajSeva today to explore and contribute to local projects in your city. No technical knowledge required! Just sign up and start making a difference.</p>
            <button>Explore more</button>
        </div>
        <div className="right">
            <img src="./Vector (3).png" alt="" />
        </div>
        </div>
    </div>
    
    </div>
   
    <div className="landing-container-2">
    <div className="landing2">
        {/* <h1>How does SamajSeva work?</h1> */}
        <div className="text">
        <div className="right">
            <img src="./Group (4).png" alt="" />
        </div>
        <div className="left">
            <h1>SamajSeva and community engagement</h1>
            <p>SamajSeva is empowering communities through volunteerism. Our platform connects volunteers with meaningful projects, ensuring a decentralized, accessible, and impactful way to give back.</p>
            <button>Start volunteering now</button>
        </div>
        </div>
    </div>
    
    </div>

    <div className="landing-container">
    <div className="landing1">
        {/* <h1>How does SamajSeva work?</h1> */}
        <div className="text">
        <div className="left">
            <h1>Transforming local volunteerism</h1>
            <p>SamajSeva enables organizations to streamline volunteer services, revolutionizing community engagement and impact. Join us in creating a positive change together.</p>
            <button>Learn more</button>
        </div>
        <div className="right">
            <img src="./Group (5).png" alt="" />
        </div>
        </div>
    </div>
    
    

    
    </div>

    <div className="landing-container-2">
    <div className="landing2">
        {/* <h1>How does SamajSeva work?</h1> */}
        <div className="text">
        <div className="right">
            <img src="./Group (6).png" alt="" />
        </div>
        <div className="left">
            <h1>Empower your city through volunteering</h1>
            <p>Discover how SamajSeva leverages technology to enhance volunteer experiences, making community engagement smarter and faster. Join us in reshaping the future of volunteerism.</p>
            {/* <button>Explore more</button> */}
        </div>
        </div>
    </div>
    
    </div>

    </>
  );
}
export default LandingPage;