import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const ContactSection = ({ data }) => {
  return (
    <section className="bg-background text-white py-20 px-6" id="contact">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
          Contactanos{" "}
        </h2>
        <div className="grid items-center md:grid-cols-2 gap-12">
          {/* Datos de contacto */}
          <div className="space-y-6 text-foreground">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-primary" />
              <p>{data.address}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-primary" />
              <p>{data.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-primary" />
              <a
                href={data.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {data.phone}
              </a>
            </div>
            <div className="flex items-center gap-4">
              <FaInstagram className="text-primary" />
              <a
                href={data.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @Crossfit_Bullbox365
              </a>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg border border-orange-500">
            <iframe
              src={data.mapEmbed}
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicacion Bullbox 365"
            ></iframe>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
