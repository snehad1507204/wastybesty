import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "./BlogDetail.css";

const blogPosts = [
  {
    id: 1,
    title: "Mastering Plant Care: Tips for Thriving Gardens",
    category: "Plant Care & Maintenance",
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        data: "Every plant deserves the right care. From watering routines to sunlight optimization, these tips ensure your garden flourishes year-round."
      },
      {
        type: "highlight",
        data: "Pro Tip: Morning watering helps prevent fungal growth and keeps leaves healthy!"
      },
      {
        type: "list",
        title: "Key Steps for Plant Success:",
        items: [
          "Assess sunlight requirements: full sun, partial shade, or shade-loving plants.",
          "Water consistently but avoid overwatering; check soil moisture.",
          "Use organic fertilizers to enrich the soil naturally.",
          "Prune regularly to encourage healthy growth and airflow.",
          "Rotate indoor plants for even growth on all sides.",
          "Inspect for pests and treat naturally with neem oil or soap solutions.",
          "Mulch outdoor plants to retain moisture and prevent weeds."
        ]
      },
      {
        type: "conclusion",
        data: "With consistent care and observation, both beginners and advanced gardeners can enjoy lush, thriving plants indoors and outdoors."
      }
    ]
  },
  {
    id: 2,
    title: "Harvesting Made Simple: From Seeds to Bounty",
    category: "Plant Harvesting & Growth",
    img: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?q=80&w=1200&auto=format&fit=crop",
    content: [
      {
        type: "intro",
        data: "Harvesting your plants at the right time maximizes yield and quality. Timing, technique, and plant type all matter."
      },
      {
        type: "highlight",
        data: "Did You Know? Leafy greens taste best when harvested early in the morning."
      },
      {
        type: "list",
        title: "Harvesting Guidelines:",
        items: [
          "Know the maturity period of each plant species.",
          "Use clean, sharp tools to prevent damage.",
          "Harvest selectively; leave some leaves for continuous growth.",
          "Store harvested produce in cool, dry places to maintain freshness.",
          "Document your harvest schedule for improved future yields."
        ]
      },
      {
        type: "conclusion",
        data: "Following these harvesting strategies ensures a sustainable, productive garden while enjoying fresh, home-grown produce."
      }
    ]
  },
];

function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id));

  if (!post) return <div className="not-found">Post not found</div>;

  return (
    <motion.div className="blog-detail"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.8 }}
    >
      <button className="back-btn" onClick={() => navigate(-1)}>← Back to Blog</button>

      <motion.h1
        className="blog-title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {post.title}
      </motion.h1>

      <motion.div className="blog-category">
        <span>{post.category}</span>
      </motion.div>

      <motion.img
        src={post.img}
        alt={post.title}
        className="blog-img"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div className="blog-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {post.content.map((block, idx) => {
  if (block.type === "intro" || block.type === "conclusion") {
    return <p key={idx} className={block.type}>{block.data}</p>;
  } else if (block.type === "highlight") {
    return (
      <motion.div
        key={idx}
        className="highlight"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {block.data}
      </motion.div>
    );
  } else if (block.type === "list") {
    return (
      <div key={idx} className="list-block">
        <h3>{block.title}</h3>
        <ul>
          {block.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    );
  }
  return null; // 👈 Add this to handle unexpected block types
})}
      </motion.div>
    </motion.div>
  );
}

export default BlogDetail;
