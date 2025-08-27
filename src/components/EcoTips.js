import React, { useState } from "react";
import { motion } from "framer-motion";

const allTips = [
  { id: 1, category: "Trees", title: "Plant Native Trees", desc: "Support local ecosystems and wildlife.", icon: "🌳" },
  { id: 2, category: "Water", title: "Rainwater Harvesting", desc: "Store rainwater for gardening use.", icon: "💧" },
  { id: 3, category: "Compost", title: "Home Composting", desc: "Turn waste into organic fertilizer.", icon: "♻️" },
  { id: 4, category: "Indoor", title: "Air-Purifying Plants", desc: "Grow Snake Plant, Aloe Vera, Areca Palm.", icon: "🪴" },
  { id: 5, category: "Water", title: "Drip Irrigation", desc: "Save water with efficient plant watering.", icon: "🚰" },
  { id: 6, category: "Compost", title: "Mulching", desc: "Reduce water loss & add nutrients.", icon: "🍂" },
  { id: 7, category: "Trees", title: "Tree Care", desc: "Prune trees to maintain health & growth.", icon: "🌲" },
];

function EcoTips() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Trees", "Water", "Compost", "Indoor"];
  const filteredTips = filter === "All" ? allTips : allTips.filter(tip => tip.category === filter);

  return (
    <section className="eco-tips">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Eco Tips for Sustainable Living
        </motion.h2>

        <p className="lead">Simple, plant-based ideas to make your lifestyle greener.</p>

        <div className="filter-buttons">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={filter === cat ? "active" : ""}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="tips-grid">
          {filteredTips.map((tip) => (
            <motion.div 
              key={tip.id} 
              className="tip-card"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="tip-icon">{tip.icon}</span>
              <h3>{tip.title}</h3>
              <p>{tip.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EcoTips;
