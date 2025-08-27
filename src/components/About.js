import React from "react";
import "./About.css"; 
function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2>About WastyBesty</h2>
        <p className="lead">
          At <strong>WastyBesty</strong>, we believe that every piece of waste has
          the potential to become something valuable. Our mission is to inspire
          creativity, promote sustainability, and encourage eco-friendly living
          through innovative DIY projects and upcycling ideas.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To transform the way people see waste by providing creative
              solutions that reduce landfill impact and promote greener living.
            </p>
          </div>

          <div className="about-card">
            <h3>What We Offer</h3>
            <p>
              Step-by-step tutorials, eco-tips, and DIY projects to repurpose
              plastic, wood, paper, and metal into beautiful and useful
              creations.
            </p>
          </div>

          <div className="about-card">
            <h3>Why WastyBesty?</h3>
            <p>
              Because sustainability doesn't have to be boring! We make it fun,
              simple, and practical for everyone – from beginners to experts.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Community</h3>
            <p>
              Join a growing network of eco-enthusiasts sharing ideas, tips, and
              inspiration to make the world a cleaner and greener place.
            </p>
          </div>
        </div>

        <p className="closing-note">
          Whether you're looking to decorate your home, start a garden, or simply reduce waste,
          <strong> WastyBesty </strong> is your go-to source for sustainable, creative solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
