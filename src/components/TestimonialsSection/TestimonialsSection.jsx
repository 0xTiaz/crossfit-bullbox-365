import React from "react";

const TestimonialsSection = ({ data }) => {
  return (
    <section className="bg-[#121212] py-20 px-6 text-white" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Lo que dicen nuestros atletas
        </h2>
        <div className="grid gap-10 md:grid-cols-3">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-400">
                {item.name}
              </h3>
              <p className="text-sm text-white/60 italic">{item.role}</p>
              <p className="text-white/80 text-sm mt-4">"{item.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
