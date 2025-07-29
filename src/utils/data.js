export const coaches = [
  { name: "Michael", role: "", image: "/sampleImage.png", bio: "" },
  { name: "Reynaldo", role: "", image: "/sampleImage.png", bio: "" },
  { name: "Guillermo", role: "", image: "/sampleImage.png", bio: "" },
  { name: "Javier", role: "", image: "/sampleImage.png", bio: "" },
  { name: "Cristobal", role: "", image: "/sampleImage.png", bio: "" },
  { name: "Natalia", role: "", image: "/sampleImage.png", bio: "" },
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
    name: "Plan 1",
    price: "$27.000 CLP",
    description:
      "Acceso a 4 clases durante un mes. Ideal para quienes quieren entrenar de forma ocasional.",
    benefits: [
      //   "Clases ilimitadas",
      //   "Acceso a todas las disciplinas",
      //   "Evaluación física inicial",
    ],
  },
  {
    name: "Plan 2",
    price: "$43.000 CLP",
    description: "Acceso a 8 clases al mes, 2 dias a la semana.",
    benefits: [
      //   "1 clase de CrossFit o Kickboxing",
      //   "Acceso completo al box",
      //   "Sin compromiso de permanencia",
    ],
  },
  {
    name: "Plan 3",
    price: "$53.000 CLP",
    description: "Acceso a 12 clases al mes, 3 dias a la semana.",
    benefits: [
      //   "3 meses de entrenamiento",
      //   "Evaluaciones mensuales",
      //   "Acceso a comunidad privada",
    ],
  },
  {
    name: "Plan 4",
    price: "$63.000 CLP",
    description: "Acceso a 16 clases al mes, 4 dias a la semana.",
    benefits: [
      //   "3 meses de entrenamiento",
      //   "Evaluaciones mensuales",
      //   "Acceso a comunidad privada",
    ],
  },
  {
    name: "Plan 5",
    price: "$53.000 CLP",
    description: "Acceso a 20 clases al mes, 5 dias a la semana.",
    benefits: [
      "Incluye clases especializadas los sabados",
      // "Evaluaciones mensuales",
      // "Acceso a comunidad privada",
    ],
  },
];

export const schedule = [
  {
    day: "Lunes - Miercoles - Viernes",
    desc: "",
    classes: [
      { time: "06:00 - 07:00", type: "CROSSFIT" },
      { time: "08:15 - 09:00", type: "FUNCIONAL" },
      { time: "11:00 - 13:00", type: "BOXEO" },
      { time: "18:15 - 19:00", type: "KARATE" },
      { time: "19:00 - 20:00", type: "CROSSFIT" },
      { time: "19:30 - 20:30", type: "MUAY THAI" },
      { time: "20:00 - 21:00", type: "CROSSFIT" },
    ],
  },
  {
    day: "Martes - Jueves",
    desc: "",
    classes: [
      { time: "06:00 - 07:00", type: "CROSSFIT" },
      { time: "07:15 - 08:00", type: "CROSSFIT" },
      { time: "11:00 - 13:00", type: "BOXEO" },
      { time: "18:15 - 19:00", type: "KARATE" },
      { time: "19:00 - 20:00", type: "CROSSFIT" },
      { time: "19:30 - 20:30", type: "MUAY THAI" },
      { time: "20:00 - 21:00", type: "CROSSFIT" },
      { time: "21:30 - 22:30", type: "KICKBOXING" },
    ],
  },
  {
    day: "Sabado",
    desc: "Enfocado en desarrollo de tecnica y desafio Hyrox",
    classes: [
      { time: "10:00 - 11:00", type: "CROSSFIT" },
      { time: "11:00 - 12:00", type: "CROSSFIT" },
    ],
  },
  // Agrega más días según necesites
];

// /data/contactInfo.js

export const contactInfo = {
  address: "Roma 2161, Conchali, Region Metropolitana",
  phone: "+56 9 7978 9434",
  email: "contacto@bullbox365.cl",
  instagram: "https://www.instagram.com/crossfit_bullbox365/",
  whatsapp: "https://wa.me/+56979789434",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9332390570703!2d-70.67333150000002!3d-33.39890589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c76bb0a465d3%3A0x4ecdccb7c666ebe5!2sBullbox%20365!5e0!3m2!1ses!2scl!4v1753738331376!5m2!1ses!2scl", // opcional
};
