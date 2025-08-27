import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Gallery.css";

const galleryItems = [
  {
    id: 1,
    title: "Plastic Bottle → Hanging Herb Planter",
    category: "Before & After",
    material: "Plastic",
    difficulty: "Easy",
    time: "30 min",
    ecoImpact: "Saved 3 plastic bottles",
    imgBefore: "https://www.pillarboxblue.com/wp-content/uploads/2020/05/decoupage-upcycled-plastic-bottle-garden-fts-735x490.jpg",
    imgAfter: "https://images.unsplash.com/photo-1604147706282-c60db1d58e0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxwbGFzdGljfHx8fHx8MTY5MzE2ODU5MA&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 2,
    title: "Tin Can → Colorful Succulent Pot",
    category: "Before & After",
    material: "Metal",
    difficulty: "Medium",
    time: "45 min",
    ecoImpact: "Reused 2 tin cans",
    imgBefore: "https://images.unsplash.com/photo-1596526130242-c8d0c1528db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0aW4gY2FufHx8fHx8MTY5MzE2ODY0Mw&ixlib=rb-4.0.3&q=80&w=400",
    imgAfter: "https://images.unsplash.com/photo-1597033473235-0d7e7e2f9b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx0aW4gY2FufHx8fHx8MTY5MzE2ODY1OQ&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 3,
    title: "Community Garden – Raised Bed Project",
    category: "Community Showcase",
    material: "Plants",
    difficulty: "Hard",
    time: "2 hours",
    ecoImpact: "Planted 12 vegetable seedlings",
    imgBefore: "https://images.unsplash.com/photo-1610164118381-4e7591e9f96f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxwcm9qZWN0fHx8fHx8MTY5MzE2ODcyNg&ixlib=rb-4.0.3&q=80&w=400",
    imgAfter: "https://images.unsplash.com/photo-1603052875737-cff32b66d18f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxwcm9qZWN0fHx8fHx8MTY5MzE2ODczNQ&ixlib=rb-4.0.3&q=80&w=400",
    author: "Sarah K.",
    instagram: "https://instagram.com/sarah_gardener",
    testimonial: "This project transformed our community garden! Kids loved planting."
  },
  {
    id: 4,
    title: "DIY Vertical Garden from Wooden Crates",
    category: "Before & After",
    material: "Wood",
    difficulty: "Medium",
    time: "1.5 hours",
    ecoImpact: "Upcycled 4 wooden crates",
    imgBefore: "https://images.unsplash.com/photo-1599922610971-7ee0426472f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx3b29kfHx8fHx8MTY5MzE2ODc4OQ&ixlib=rb-4.0.3&q=80&w=400",
    imgAfter: "https://images.unsplash.com/photo-1598579212684-6bda9a6e7b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx3b29kfHx8fHx8MTY5MzE2ODgwNw&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 5,
    title: "Seasonal Plant Décor – Summer Blooms",
    category: "Seasonal Showcase",
    material: "Plants",
    difficulty: "Easy",
    time: "1 hour",
    ecoImpact: "Planted 6 flowering plants",
    imgBefore: "https://images.unsplash.com/photo-1627033795534-bb38f52d2d5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxwbGFudHxlbnwwfHx8fDE2OTMxNjg4NjM&ixlib=rb-4.0.3&q=80&w=400",
    imgAfter: "https://images.unsplash.com/photo-1627033795564-5bb66c3a8c1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxwbGFudHxlbnwwfHx8fDE2OTMxNjg4ODk&ixlib=rb-4.0.3&q=80&w=400",
  },
  {
    id: 6,
    title: "DIY Herb Garden – Indoor Plants",
    category: "Tips & Tricks",
    material: "Plants",
    difficulty: "Easy",
    time: "45 min",
    ecoImpact: "Used kitchen scraps for soil nutrients",
    imgBefore: "https://images.unsplash.com/photo-1560184897-7e94e8cfd98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxpbmRvb3J8fHx8fDE2OTMxNjg5Njc&ixlib=rb-4.0.3&q=80&w=400",
    imgAfter: "https://images.unsplash.com/photo-1560184897-7e94e8cfd98c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHxpbmRvb3J8fHx8fDE2OTMxNjg5ODQ&ixlib=rb-4.0.3&q=80&w=400",
  },
];

const categories = ["All", "Before & After", "Community Showcase", "Seasonal Showcase"];
const materials = ["All", "Plastic", "Paper", "Wood", "Plants"];

function Gallery() {
  const [filterCategory, setFilterCategory] = useState("All");
  const [filterMaterial, setFilterMaterial] = useState("All");

  const filteredItems = galleryItems.filter(item => {
    return (filterCategory === "All" || item.category === filterCategory) &&
           (filterMaterial === "All" || item.material === filterMaterial);
  });

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">Gallery – DIY & Eco Projects</h2>
        <p className="lead">Explore transformations, community projects, seasonal décor, and quick eco-tips.</p>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <span>Category: </span>
            {categories.map(cat => (
              <button 
                key={cat} 
                className={filterCategory === cat ? "active" : ""}
                onClick={() => setFilterCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="filter-group">
            <span>Material: </span>
            {materials.map(mat => (
              <button 
                key={mat} 
                className={filterMaterial === mat ? "active" : ""}
                onClick={() => setFilterMaterial(mat)}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <motion.div 
              key={item.id} 
              className="gallery-card"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-container">
                <img src={item.imgBefore} alt={`${item.title} Before`} className="before-img"/>
                <img src={item.imgAfter} alt={`${item.title} After`} className="after-img"/>
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p><strong>Material:</strong> {item.material} | <strong>Difficulty:</strong> {item.difficulty}</p>
                <p><strong>Time:</strong> {item.time} | <strong>Eco Impact:</strong> {item.ecoImpact}</p>
                {item.author && 
                  <p><strong>By:</strong> <a href={item.instagram} target="_blank" rel="noreferrer">{item.author}</a></p>
                }
                {item.testimonial && <p className="testimonial">"{item.testimonial}"</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
