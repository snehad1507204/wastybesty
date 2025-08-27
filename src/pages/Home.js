import React from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import LatestVideos from "../components/LatestVideos";
import QuickLinks from "../components/QuickLinks";
import EcoTips from "../components/EcoTips";
import Newsletter from "../components/NewsLetter";


function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <About/>
      <LatestVideos />
      <EcoTips/>
      <Newsletter/>
      <QuickLinks />
 
    </div>
  );
}

export default Home;
