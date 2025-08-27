// BlogPage.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

const blogPosts = [
    {
        id: 1,
        category: "Plant Care & Maintenance",
        title: "Top 10 Plant Care Tips for Thriving Indoor Plants",
        desc: "Learn essential plant care practices including watering, sunlight, pruning, and fertilization to keep your indoor plants healthy and vibrant.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB1EruebC0MTopX7q4-yWAQu-DdfdteVzikg&s",
    },
    {
        id: 2,
        category: "Tree Plantation & Care",
        title: "How to Plant a Tree – Step-by-Step Guide",
        desc: "Plant trees correctly with our comprehensive guide covering soil preparation, planting depth, watering, and seasonal care tips.",
        img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 3,
        category: "Harvesting & Organic Practices",
        title: "Home Harvesting Tips for Fruits & Vegetables",
        desc: "Maximize your garden yield with proper harvesting techniques, crop rotation, and natural fertilization for healthier plants.",
        img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop",
    },
    {
        id: 4,
        category: "DIY Eco Projects",
        title: "Turn Household Waste into Eco-Friendly Planters",
        desc: "Create beautiful, sustainable planters from plastic bottles, tin cans, and fabric scraps to decorate your garden.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrRpQHRx39l7914P1wa1KvQgp9B58AtcUCiQ&s",
    },
];

const dailyTips = [
    "Water indoor plants early morning to prevent leaf fungus.",
    "Prune dead leaves weekly to improve plant growth.",
    "Use rainwater for garden plants to save water.",
];

const seasonalCalendar = [
    { month: "Jan", task: "Prune indoor plants" },
    { month: "Feb", task: "Start seed sowing" },
    { month: "Mar", task: "Refresh compost & mulch" },
    { month: "Apr", task: "Fertilize garden beds" },
    { month: "May", task: "Plant flowering trees" },
    { month: "Jun", task: "Water deeply during hot days" },
];

function BlogPage() {
    const navigate = useNavigate();
    return (
        <div className="blog-page">
            {/* Header */}
            <header className="blog-header">
                <h1>Grow, Harvest & Care – Tips for a Greener Lifestyle!</h1>
                <p>Discover plant care, tree plantation, harvesting tips, and creative DIY projects for sustainable living.</p>
            </header>

            {/* Blog Categories */}
            <section className="blog-categories">
                <h2>Blog Categories</h2>
                <div className="categories-grid">
                    <div className="category-card">🌱 Plant Care & Maintenance</div>
                    <div className="category-card">🌳 Tree Plantation & Care</div>
                    <div className="category-card">🍂 Harvesting & Organic Practices</div>
                    <div className="category-card">🪴 DIY Eco Projects</div>
                </div>
            </section>

            {/* Blog Posts */}
            <section className="blog-posts">
                <h2>Latest Blog Posts</h2>
                <div className="posts-grid">
                    {blogPosts.map(post => (
                        <div className="post-card" key={post.id}>
                            <img src={post.img} alt={post.title} />
                            <div className="post-content">
                                <span className="post-category">{post.category}</span>
                                <h3>{post.title}</h3>
                                <p>{post.desc}</p>
                                <button className="read-more" onClick={() => navigate(`/blog/${post.id}`)}>Read More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sidebar / Extra Widgets */}
            <section className="extra-widgets">
                <div className="widget daily-tip">
                    <h3>💡 Daily Plant Tip</h3>
                    <ul>
                        {dailyTips.map((tip, index) => <li key={index}>{tip}</li>)}
                    </ul>
                </div>
                <div className="widget seasonal-calendar">
                    <h3>📅 Seasonal Plant & Tree Calendar</h3>
                    <ul>
                        {seasonalCalendar.map((item, index) => (
                            <li key={index}><strong>{item.month}:</strong> {item.task}</li>
                        ))}
                    </ul>
                </div>
                <div className="widget downloadable-guide">
                    <h3>📄 Downloadable Guides</h3>
                    <button>Beginner’s Guide to Tree Plantation</button>
                </div>
            </section>
        </div>
    );
}

export default BlogPage;
