import React from "react";
import BullImage from "../../../public/carousel1.jpg";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative py-20 px-6 bg-[#121212] text-white h-auto"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${BullImage})` }}
      ></div>
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
          Nuestra Historia
        </h2>
        <p className="text-white md:text-xl leading-relaxed">
          En{" "}
          <span className="font-bold text-orange-500">
            Crossfit Bullbox 365
          </span>
          , no solo entrenamos cuerpos, entrenamos carácter. Nacimos con la
          visión de crear una comunidad fuerte, inclusiva y motivada, donde cada
          persona —desde principiantes hasta atletas— encuentre un espacio para
          superarse día a día. Inspirados por la raza <em>bull terrier</em>,
          somos decididos, resistentes y leales. Nuestra misión es acompañarte
          en tu camino a una mejor versión de ti.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
