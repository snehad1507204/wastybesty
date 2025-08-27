import React, { useState } from "react";
import { FaLeaf, FaUtensils, FaPagelines, FaSeedling } from "react-icons/fa";
import "./Categories.css";

const categoryData = [
  {
    id: "kitchen",
    title: "Kitchen Scraps",
    icon: <FaUtensils />,
    examples: "Veg & fruit peels, coffee grounds, tea leaves",
    color: "#FFA500",
    tip: "Use only plant-based scraps. Avoid meat/dairy to prevent odor."
  },
  {
    id: "garden",
    title: "Garden Waste",
    icon: <FaLeaf />,
    examples: "Dry leaves, grass clippings, small twigs",
    color: "#39b46e",
    tip: "Keep dry and chopped for faster decomposition."
  },
  {
    id: "floral",
    title: "Floral Waste",
    icon: <FaPagelines />,
    examples: "Temple flowers, garlands, dried petals",
    color: "#FF69B4",
    tip: "Floral waste is perfect for compost or DIY dyes."
  },
  {
    id: "agri",
    title: "Agri Residue",
    icon: <FaSeedling />,
    examples: "Husks, stalks, and post-harvest residue",
    color: "#8FBC8F",
    tip: "Ideal for mulching or making briquettes."
  }
];

const Categories = () => {
  const [flipped, setFlipped] = useState(null);
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="categories">
      <h2>Know Your Green Waste</h2>
      <p className="category-intro">
        Understand the types of biodegradable waste and choose the right method for composting, recycling, or reusing.
      </p>

      <div className="category-grid">
        {categoryData.map((cat) => (
          <div
            key={cat.id}
            className={`cat-card ${flipped === cat.id ? "flipped" : ""}`}
            style={{ borderTop: `4px solid ${cat.color}` }}
            onClick={() => setFlipped(flipped === cat.id ? null : cat.id)}
          >
            <div className="cat-front">
              <div className="cat-icon" style={{ color: cat.color }}>
                {cat.icon}
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.examples}</p>
            </div>
            <div className="cat-back">
              <h3>{cat.title} Tips</h3>
              <p>{cat.tip}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="cta-btn" onClick={() => setShowModal(true)}>
        Match my waste →
      </button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Suggested Methods</h3>
            <ul>
              <li>Kitchen Scraps → Compost or Bio-Enzyme</li>
              <li>Garden Waste → Mulching or Compost</li>
              <li>Floral Waste → Compost or DIY Dyes</li>
              <li>Agri Residue → Briquettes or Mulch</li>
            </ul>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Categories;
