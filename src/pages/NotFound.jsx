import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSection from "../components/FooterSection/FooterSection";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#121212] text-white overflow-x-hidden">
      <Navbar />
      <div className="w-full min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold py-4">
          Not <span className="text-orange-500">Found</span>
        </h2>
        <p>No encontraste lo que esperabas?</p>
        <a href="/" className="px-6 py-2 mt-4 bg-orange-500 rounded-full">
          Volver al inicio
        </a>
      </div>
      <FooterSection />
    </div>
  );
};

export default NotFound;
