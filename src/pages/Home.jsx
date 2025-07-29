import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/HeroSection.jsx/HeroSection";
import AboutSection from "../components/AboutSection/AboutSection";
import Coaches from "../components/Coaches/Coaches";
import Plans from "../components/Plans/Plans";
import ScheduleSection from "../components/ScheduleSection/ScheduleSection";
import ContactSection from "../components/ContactSection/ContactSection";
import FooterSection from "../components/FooterSection/FooterSection";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";
import {
  coaches,
  testimonials,
  plans,
  schedule,
  contactInfo,
} from "@/utils/data";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Coaches data={coaches} />
        <TestimonialsSection data={testimonials} />
        <Plans data={plans} />
        <ScheduleSection data={schedule} />
        <ContactSection data={contactInfo} />
        <FooterSection />
      </main>
    </div>
  );
};

export default Home;
