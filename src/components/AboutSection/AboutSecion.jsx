import React from "react";

const AboutSecion = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-[#12121212] text-white text-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-500">
          Nuestra Historia
        </h2>
        <p className="text-white/80 text-lg leading-relaxed">
          En{" "}
          <span className="font-semibold text-orange-500">
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

export default AboutSecion;
