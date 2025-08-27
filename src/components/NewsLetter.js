import React, { useState } from "react";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section id="newsletter" className="newsletter">
      {/* Falling Leaves Animation */}
      <div className="leaves-container">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 5}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="newsletter-content">
        <h2>Subscribe to WastyBesty</h2>
        <p>Get eco-friendly plant care tips, and sustainability hacks!</p>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <div className="button-wrapper">
          <button type="submit">Subscribe</button>
          </div>
        </form>

        {submitted && <p className="success-message">Thank you for subscribing! 🌱</p>}
      </div>
    </section>
  );
}

export default Newsletter;
