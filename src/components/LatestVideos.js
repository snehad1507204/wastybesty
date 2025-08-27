import React from "react";

const videos = [
  { id: 1, title: "Guess who noticed what?", thumbnail: "https://media.istockphoto.com/id/842448020/photo/surreal-abstract-geometric-floating-wooden-cube-with-word-guess-concept.jpg?s=612x612&w=0&k=20&c=eZ1amtBDqnFg0eMCHQSoXyQnAjPfQcYjMJKHS-VtCRY=", link: "https://youtube.com/shorts/RZfQDMtTVCA?si=5axuFdoM8ueMjDP4" },
  { id: 2, title: "After a long wait", thumbnail: "https://www.ugaoo.com/cdn/shop/articles/football_lily.jpg?v=1690615292", link: "https://youtube.com/shorts/q9YdZBkzXQ0?si=VAMKzYz3a1N8qlJ3" },
  { id: 3, title: "Some days stay in our hearts forever… I miss those times.", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhns8ReD0fEYyfj31Dnz2fj9oZwsTk-0146g&s", link: "https://youtube.com/shorts/8r0bCXqaovc?si=NFdldhVj0BIAYTX3" },
  { id: 4, title: "Nature’s Own Clock – The Time-Telling Plant", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFd8AGtI6Pqgnu9M_6FRmfuZjphWCEMgPdlQ&s", link:"https://youtube.com/shorts/GAhoWqy7COs?si=l9T7GoOBxxaB43p7" },
  { id: 5, title: "Grape growing… but make it CRAZY!", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyyyRabznFfHLC35pG0h3yzuh4aRPlYtitDA&s", link:"https://youtube.com/shorts/o8IGKJFFstQ?si=z7WsBQGG3j3l3iY8" },
  { id: 6, title: "Life in Every Leaf", thumbnail: "https://5.imimg.com/data5/SELLER/Default/2024/6/427667757/RY/EP/NF/795053/granular-chemical-fertilizer-hero-500x500.jpg", link:"https://youtube.com/shorts/HiwBtHSs5YM?si=f60GpAob9zQHOHWE" },
  { id: 7, title: "Crazy Hack for Tons of Pomegranates!", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbUO9nPDzPVG-RfEbH8U1NqvjG_UrsyAiXzA&s", link:"https://youtube.com/shorts/8Iw1JH6F4fw?si=CBrLmjIwo_79639_" },
  { id: 8, title: "Blooming… even in summer heat!", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLP8jATCjyS0aZfynQIu08o_C6lWK7EuN-qg&s", link:"https://youtube.com/shorts/wQs1aQq0RlE?si=vCA5ATCCa3KH9yMT" },
  { id: 9, title: "One Plant, Whole Neighborhood Happy!", thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4hM4RMULa1cgFA2PTbyAWuYZbeCMj1y5BKA&s", link:"https://youtube.com/shorts/fRKMShQSBp8?si=hEbV-wrFn9ZiaWpI" },
];

function LatestVideos() {
  return (
    <div className="latest-videos">
      <h2>Latest Videos</h2>
      <div className="video-grid">
        {videos.map(video => (
          <div key={video.id} className="video-card">
            <img src={video.thumbnail} alt={video.title} />
            <h3>{video.title}</h3>
            <button onClick={() => window.open(video.link, "_blank")}>Watch Video</button>
          </div>
        ))}
      </div>
      <button className="see-all-btn" onClick={() => window.open("https://youtube.com/@wastybesty")}>
        See All Videos
      </button>
    </div>
  );
}

export default LatestVideos;
