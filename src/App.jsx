import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import ProjectInquirySection from "./components/Inquiry";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Section";
import ServicesSection from "./components/ServiceSection";
import TechnologyStack from "./components/TechnologyStack";
import TechStackSection from "./components/TechStackSection";
import HowItWorks from "./components/WorkingProcess";
import HomePage from "./components/HomePage";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <TechStackSection />
        <TechnologyStack />
        <HowItWorks />
        <ProjectInquirySection />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
