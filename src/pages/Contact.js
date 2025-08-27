import React, { useState } from "react";
import "./contact.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    setStatus("Thanks for contacting WastyBesty! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", newsletterEmail);
    setNewsletterEmail("");
    alert("Thanks for subscribing to WastyBesty updates!");
  };

  const toggleFAQ = (index) => setOpenFAQ(openFAQ === index ? null : index);

  const faqs = [
    { question: "What services does WastyBesty offer?", answer: "We provide eco-friendly waste management solutions for homes and businesses." },
    { question: "How can I schedule a pickup?", answer: "You can schedule a pickup via our website or by calling our customer service." },
    { question: "Do you operate in my area?", answer: "Currently, we operate in select cities. Check our service area page for details." },
    { question: "What types of waste do you collect?", answer: "We collect household, commercial, and recyclable waste, excluding hazardous materials." },
    { question: "Is there a minimum quantity for pickup?", answer: "No, we cater to both small and large waste pickups." },
    { question: "Do you provide recycling bins?", answer: "Yes, we offer bins for recyclable materials upon request." },
    { question: "How do you ensure eco-friendly disposal?", answer: "We partner with certified recycling and composting facilities." },
    { question: "Can I track my waste pickup?", answer: "Yes, our app allows you to track your scheduled pickups in real time." },
    { question: "Do you offer corporate waste solutions?", answer: "Yes, we provide tailored waste management plans for businesses." },
    { question: "What payment methods do you accept?", answer: "We accept credit/debit cards, UPI, and net banking." },
    { question: "Do you handle hazardous waste?", answer: "No, we do not handle hazardous or medical waste." },
    { question: "Can I reschedule my pickup?", answer: "Yes, pickups can be rescheduled through our website or app." },
    { question: "Do you offer discounts for bulk pickups?", answer: "Yes, we provide special rates for large volume pickups." }
  ];

  return (
    <div className="contact-container">
      <h1>Contact WastyBesty</h1>
      <p>We’d love to hear from you! Fill out the form below.</p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>

        <button type="submit">Send Message</button>
      </form>

      {status && <p className="status-message">{status}</p>}

      {/* Multi-location Google Map */}
      <div className="map-container">
        <h2>Our Locations</h2>
        <iframe
          title="WastyBesty Locations"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.9450722149513!2d80.30670757334477!3d26.425249079830422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47b1e8d10545%3A0xa3a5c6d2eb38b2f6!2sPatel%20Sadan%20Guest%20House!5e0!3m2!1sen!2sin!4v1756184795262!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openFAQ === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span>{openFAQ === index ? "−" : "+"}</span>
            </div>
            {openFAQ === index && <div className="faq-answer"><p>{faq.answer}</p></div>}
          </div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="newsletter">
        <h2>Stay Updated</h2>
        <form onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="Enter your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            required
          />
           <div class="button-wrapper">
          <button type="submit">Subscribe</button>
          </div>
        </form>
      </div>

      {/* Social Media Links */}
      <div className="social-links">
        <h3>Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
      </div>

      {/* Live Chat Button */}
      <a href="https://tawk.to" target="_blank" rel="noreferrer" className="chat-button">
        💬 Chat with Us
      </a>
    </div>
  );
};

export default Contact;