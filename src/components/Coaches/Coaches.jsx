import React from "react";
import CoachCard from "./CoachCard";

const Coaches = ({ data }) => {
  return (
    <section
      id="coaches"
      className="py-20 px-6 bg-black text-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500">
          Conoce a Nuestra Familia
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {data.map((coach, idx) => (
            <CoachCard key={idx} {...coach} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
