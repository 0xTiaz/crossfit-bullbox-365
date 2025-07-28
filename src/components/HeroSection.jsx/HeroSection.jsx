import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const HeroSection = () => {
  const neonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(neonRef.current, { opacity: 0, duration: 0.1 })
      .to(neonRef.current, { opacity: 1, duration: 0.1 })
      .to(neonRef.current, { opacity: 0, duration: 0.08 })
      .to(neonRef.current, { opacity: 1, duration: 0.15 })
      .to(neonRef.current, {
        opacity: 1,
        textShadow: "0 0 15px #ff5500, 0 0 30px #ff5500",
      });
  }, []);
  return (
    <section
      id="home"
      className="h-screen bg-[#121212] text-white flex flex-col items-center justify-center px-6 text-center"
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Crossfit{" "}
        <span
          ref={neonRef}
          className="text-orange-500"
          style={{
            textShadow: "0 0 0 #ff5500",
            transition: "text-shadow 0.3s ease-in-out",
          }}
        >
          Bullbox 365
        </span>{" "}
      </h1>
      <p className="text-white/70 max-w-xl text-lg md:text-xl mb-6">
        Donde la fuerza se entrena los 365 dias del año
      </p>
      <a
        href="#contact"
        className="bg-orange-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-orange-400 transition"
      >
        Agenda tu clase gratis
      </a>
    </section>
  );
};

export default HeroSection;
