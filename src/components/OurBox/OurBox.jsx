import React from "react";
import ImageCard from "./ImageCard";
import { ArrowDown } from "lucide-react";

const OurBox = ({ data }) => {
  return (
    <section
      id="ourbox"
      className="py-20 px-6 bg-background text-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-primary">
          Galeria
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {data.map((image, key) => (
            <ImageCard key={key} {...image} />
          ))}
        </div>
        <div className="mt-12 flex flex-col justify-center items-center gap-2">
          <a href="https://www.instagram.com/crossfit_bullbox365/">
            <p className="text-orange-500">Ver Más</p>
          </a>
          <ArrowDown className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default OurBox;
