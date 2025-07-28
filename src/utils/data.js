export const coaches = [
  { name: "coach 1", role: "", image: "", bio: "" },
  { name: "coach 2", role: "", image: "", bio: "" },
  { name: "coach 3", role: "", image: "", bio: "" },
  { name: "coach 4", role: "", image: "", bio: "" },
  { name: "coach 5", role: "", image: "", bio: "" },
  { name: "coach 6", role: "", image: "", bio: "" },
];

export const testimonials = [
  {
    name: "Valentina Reyes",
    role: "Miembro desde 2021",
    comment:
      "Entrenar en Bullbox 365 ha sido un antes y un después en mi vida. La comunidad es increíble y los coaches te impulsan siempre.",
    image: "/testimonials/valentina.jpg",
  },
  {
    name: "Pablo Muñoz",
    role: "Atleta amateur",
    comment:
      "Llegué sin saber nada de CrossFit y hoy no me imagino entrenando en otro lugar. Me siento parte de una familia.",
    image: "/testimonials/pablo.jpg",
  },
  {
    name: "Camila Soto",
    role: "Recuperación post-lesión",
    comment:
      "Gracias al equipo de Bullbox 365 volví a confiar en mi cuerpo. Nunca me sentí juzgada y eso vale oro.",
    image: "/testimonials/camila.jpg",
  },
];

export const plans = [
  {
    name: "Plan Mensual",
    price: "$45.000 CLP",
    description: "Acceso ilimitado a todas las clases durante un mes.",
    benefits: [
      "Clases ilimitadas",
      "Acceso a todas las disciplinas",
      "Evaluación física inicial",
    ],
  },
  {
    name: "Plan Drop-In",
    price: "$7.000 CLP",
    description: "Ideal para quienes quieren entrenar de forma ocasional.",
    benefits: [
      "1 clase de CrossFit o Kickboxing",
      "Acceso completo al box",
      "Sin compromiso de permanencia",
    ],
  },
  {
    name: "Plan Trimestral",
    price: "$120.000 CLP",
    description: "Entrena con consistencia y ahorra dinero.",
    benefits: [
      "3 meses de entrenamiento",
      "Evaluaciones mensuales",
      "Acceso a comunidad privada",
    ],
  },
];

export const schedule = [
  {
    day: "Lunes",
    classes: [
      { time: "07:00 - 08:00", type: "CrossFit" },
      { time: "08:00 - 09:00", type: "Open Box" },
      { time: "19:00 - 20:00", type: "CrossFit" },
    ],
  },
  {
    day: "Martes",
    classes: [
      { time: "07:00 - 08:00", type: "CrossFit" },
      { time: "20:00 - 21:00", type: "Muay Thai" },
    ],
  },
  {
    day: "Miércoles",
    classes: [
      { time: "07:00 - 08:00", type: "CrossFit" },
      { time: "19:00 - 20:00", type: "CrossFit" },
    ],
  },
  // Agrega más días según necesites
];

// /data/contactInfo.js

export const contactInfo = {
  address: "Roma 2161, Conchali, Region Metropolitana",
  phone: "+56 9 XXXX XXXX",
  email: "contacto@bullbox365.cl",
  instagram: "https://instagram.com/bullbox365",
  whatsapp: "https://wa.me/56912345678",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9332390570703!2d-70.67333150000002!3d-33.39890589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c76bb0a465d3%3A0x4ecdccb7c666ebe5!2sBullbox%20365!5e0!3m2!1ses!2scl!4v1753738331376!5m2!1ses!2scl", // opcional
};
