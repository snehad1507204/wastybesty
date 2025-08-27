import React, { useEffect} from "react";
import "./AboutPage.css";
import heroBg from "../assets/images/hero-bg.jpg";

const timelineData = [
  "2021 – Planting the Seed: Wasty Besty was founded with a vision to reduce waste and promote plant-friendly designs.",
  "2022 – Early Growth: Started community workshops to inspire upcycling and greenery.",
  "2023 – Flourishing Ideas: Developed eco-conscious product lines with plant-inspired aesthetics.",
  "2024 – Expanding Green Horizons: Initiated tree-friendly initiatives and environmental programs.",
];

const values = [
  "Sustainability: Supporting greener spaces with every creation.",
  "Innovation: Creative reuse of materials with plant-inspired designs.",
  "Environmental Awareness: Educating communities about trees and plants.",
  "Community Engagement: Encouraging eco-friendly habits through activities.",
];

const AboutPage = () => {
  

  // Parallax effect
  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector(".hero");
      if (hero) hero.style.backgroundPositionY = `${window.scrollY * 0.3}px`;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="hero-overlay">
          <h1>Nurturing Nature, One Creation at a Time</h1>
          <p>
            At Wasty Besty, we transform everyday waste into creative, sustainable products that celebrate greenery, plants, and trees.
          </p>
        </div>
      </section>

      {/* Timeline / Story Scroll */}
      <section className="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          {timelineData.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="values">
        <h2>Our Core Values</h2>
        <div className="value-cards">
          {values.map((val, idx) => (
            <div key={idx} className="value-card">
              {val}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};


export default AboutPage;
