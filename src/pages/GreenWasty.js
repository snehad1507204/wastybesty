import React, { useState, useEffect } from "react";
import compostImg from "../assets/images/compost.jpg"
import cleanerImg from "../assets/images/cleaner.jpg"
import craftsImg from "../assets/images/crafts.jpg"
import Categories from "../components/Categories";
import "./GreenWasty.css";
import DIYCorner from "../components/DIYCorner";

function GreenWasty() {
    
    const [impactCount, setImpactCount] = useState(0);

    // Animated counter
    useEffect(() => {
        let start = 0;
        const end = 1200; // Example: 1200 KG Waste Diverted
        const speed = 20;
        const counter = setInterval(() => {
            start += 10;
            setImpactCount(start);
            if (start >= end) clearInterval(counter);
        }, speed);
    }, []);


    return (
        <div className="greenwasty">
            {/* Hero Section */}
            <header className="hero">
                <h1>GreenWasty — Turn Green Waste into Everyday Wonders</h1>
                <p>Simple guides, DIY kits, and real impact from your kitchen & garden waste.</p>
                <div className="hero-buttons">
                    <a href="#diy" className="btn primary">Start a DIY</a>
                    <a href="#impact" className="btn secondary">See Impact</a>
                </div>
            </header>

            {/* Introduction */}
            <section className="intro">
                <h2>What is GreenWasty?</h2>
                <p>
                    GreenWasty is an eco-friendly initiative designed to help you transform everyday waste
                    like kitchen scraps, garden leaves, and floral remains into valuable resources.
                    Through creative upcycling, we aim to reduce landfill waste and promote sustainable living.
                </p>

                <div className="intro-features">
                    <div className="feature-card">
                        <img src={compostImg} alt="Compost" />
                        <h3>Composting</h3>
                        <p>Convert food and garden waste into nutrient-rich compost for your plants.</p>
                    </div>
                    <div className="feature-card">
                        <img src={cleanerImg} alt="Eco Cleaners" />
                        <h3>Eco Cleaners</h3>
                        <p>Make natural cleaners from citrus peels and herbs to keep your home chemical-free.</p>
                    </div>
                    <div className="feature-card">
                        <img src={craftsImg} alt="Craft Ideas" />
                        <h3>DIY Crafts</h3>
                        <p>Create unique and decorative items from waste materials to add beauty to your home.</p>
                    </div>
                </div>

                <div className="benefits">
                    <div className="card">💰 Save Money</div>
                    <div className="card">🌱 Grow Better Plants</div>
                    <div className="card">🌍 Reduce Pollution</div>
                </div>
            </section>


            {/* Waste Categories */}
            <Categories />


            {/* DIY Corner */}
            <DIYCorner />
          
            {/* Impact Counter */}
            <section id="impact" className="impact">
                <h2>Impact Counter</h2>
                <p>Join thousands of DIYers and track waste saved from landfills!</p>
                <div className="counter">
                    <span>{impactCount} KG Waste Diverted</span>
                    <span>10,000+ DIYers</span>
                    <span>₹0 Avg Cost</span>
                </div>
            </section>
        </div>
    );
}

export default GreenWasty;
