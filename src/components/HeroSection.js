import React from "react";
import heroVideo from "../assets/hero-video.mp4"; // local video

function HeroSection() {
    return (
        <div className="hero">
            <video autoPlay loop muted className="hero-video">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="hero-content">
                <h1>Turn Waste into the Best, Save Nature!</h1>
                <p>
                    Welcome to WastyBesty! Here you’ll discover how to transform everyday waste materials into
                    beautiful creative plant décor. Learn simple, eco-friendly, and budget-friendly
                    ways to decorate your home, garden, and workspace while making a positive impact on the environment.
                </p>
                <button onClick={() => window.location.href = "https://youtube.com/@wastybesty"}>
                    Watch Videos
                </button>
            </div>
        </div>
    );
}

export default HeroSection;
