import React from "react";

const Coaches = ({ data }) => {
  return (
    <section
      id="coaches"
      className="py-20 px-6 bg-black text-white text-center"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-orange-500">
          Conoce a Nuestros Coach
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {data.map((coach, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-orange-500">
                {coach.name}
              </h3>
              <p className="text-sm text-white/60 italic mb-2">{coach.role}</p>
              <p className="text-white/80 text-sm">{coach.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coaches;
