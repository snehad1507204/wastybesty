// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail"
import Contact from "./pages/Contact"
import "./style.css";
import Gallery from "./pages/Gallery";
import AboutPage from "./pages/AboutPage";
import GreenWasty from "./pages/GreenWasty"

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact/>} />
         <Route path="/gallery" element={<Gallery/>} />
         <Route path="/about" element={<AboutPage/>} />
         <Route path="/greenwasty" element={<GreenWasty/>} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
}

export default App;
