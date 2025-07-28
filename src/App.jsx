import AboutSecion from "./components/AboutSection/AboutSecion";
import Coaches from "./components/Coaches/Coaches";
import HeroSection from "./components/HeroSection.jsx/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Plans from "./components/Plans.jsx/plans";
import ScheduleSection from "./components/ScheduleSection/ScheduleSection";
import ContactSection from "./components/ContactSection/ContactSection";
import FooterSection from "./components/FooterSection/FooterSection";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      {/* // <Navbar />
      // <HeroSection />
      // <AboutSecion />
      // <Coaches />
      // <Plans />
      // <ScheduleSection />
      // <ContactSection />
      // <FooterSection /> */}
    </>
  );
}

export default App;
