import React from "react";

const TestimonialsSection = ({ data }) => {
  const duplicatedData = [...data, ...data];
  return (
    <section className="bg-background py-20 px-6 text-white" id="testimonials">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
          Lo que dicen nuestros atletas
        </h2>
        <div className="overflow-hidden">
          <div className="flex w-max animate-scroll gap-6">
            {duplicatedData.map((item, idx) => (
              <div
                key={idx}
                className="bg-background-secondary p-6 rounded-xl w-80 md:w-100 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {item.name}
                </h3>
                <p className="text-sm text-white/60 italic">{item.role}</p>
                <p className="text-primary text-sm mt-4 italic font-semibold">
                  "{item.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
