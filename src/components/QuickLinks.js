import React from "react";

const links = [
  { id: 1, title: "About Us", href: "#about", color: "#4caf50" },
  { id: 2, title: "Eco Tips", href: "#eco-tips", color: "#5dd863ff" },
  { id: 3, title: "Newsletter", href: "#newsletter", color: "#54a157ff" },
];

function QuickLinks() {
  return (
    <section className="quick-links">
      <h2>Quick Links</h2>
      <div className="links-grid">
        {links.map((link) => (
          <a 
            key={link.id} 
            href={link.href} 
            className="link-card"
            style={{ backgroundColor: link.color }}
          >
            <span className="leaf">🍃</span>
            {link.title}
          </a>
        ))}
      </div>
    </section>
  );
}

export default QuickLinks;
