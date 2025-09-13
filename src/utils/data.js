import {
  LayoutDashboard,
  Notebook,
  IdCard,
  CalendarDays,
  LogOut,
} from "lucide-react";

export const coaches = [
  {
    name: "Michael Belmar",
    alias: "Michel",
    role: "CEO",
    image: "/michel.jpeg",
    bio: `"El Primer paso es el más importante, a partir de ahi, es pura evolución."`,
  },
  {
    name: "Reynaldo Garces",
    alias: "Fito",
    role: "CEO",
    image: "/reynaldo.jpeg",
    bio: `""`,
  },
  {
    name: "Nicolas Muñoz",
    alias: "Chan",
    role: "COACH CROSSFIT",
    image: "/nico.jpeg",
    bio: `"Sin miedo al exito te preparare con calma y constancia, hasta llegar a tu 100%."`,
  },
  {
    name: "Guillermo ",
    alias: "Memeiro",
    role: "COACH CROSSFIT",
    image: "/memo.jpeg",
    bio: `""`,
  },
  {
    name: "Cristopher Adriazola",
    alias: "Toffy",
    role: "COACH HALTEROFILIA",
    image: "/toffy.jpeg",
    bio: `"Confia en tu proceso, el sacrificio y el trabajo realizado, asi podras romper tus limites."`,
  },
  // {
  //   name: "Cristopher",
  //   alias: "Toffy",
  //   role: "COACH",
  //   image: "/toffy.jpeg",
  //   bio: `""`,
  // },
  // { name: "Natalia", role: "", image: "/sampleImage.png", bio: "" },
];

export const navItems = [
  { id: "#about", label: "Nosotros" },
  { id: "#coaches", label: "Coaches" },
  { id: "#plans", label: "Planes" },
  { id: "#schedule", label: "Horarios" },
  { id: "#contact", lel: "Contacto" },
];

export const images = [
  {
    name: "BoxImage",
    src: "/anillas.jpeg",
    desc: "Implementacion de Anillas",
    title: "Anillas",
  },
  { name: "BoxImage", src: "/class.JPEG", desc: "", title: "Recuperacion" },
  {
    name: "BoxImage",
    src: "/bar.jpeg",
    desc: "",
    title: "Barbell / Barras Olimpicas",
  },
  { name: "BoxImage", src: "/merch.JPEG", desc: "", title: "MATS" },
  { name: "BoxImage", src: "/balls.JPEG", desc: "", title: "Balones" },
  { name: "BoxImage", src: "/logo.JPEG", desc: "", title: "Bandas Elasticas" },
];

export const testimonials = [
  {
    name: "Robert Ortega",
    role: "Miembro desde 2025",
    comment:
      "Para mi significa familia. He sentido el apoyo de muchas personas, llegué aqui prácticamente de cero y todos aqui me han apoyado para seguir avanzando.",
    image: "/testimonials/valentina.jpg",
  },
  {
    name: "Matias Naranjo",
    role: "Atleta Amateur",
    comment:
      "Un lugar que me salvó cuando estuve en un proceso muy malo. Cambió completamente mi mente. Aquí no se ejercita solo el cuerpo, sino que tambien la cabeza y logré llegar a una paz mental donde cada día puedo crecer.",
    image: "/testimonials/camila.jpg",
  },
  {
    name: "Darlyn Valencia",
    role: "Miembro",
    comment:
      "Desde que entreno en el box he mejorado mi salud mental y fisica, siempre que voy a entrenar lo hago con una sonrisa debido al cariño y la motivacion que entregan todos a superarse dia a dia.",
    image: "",
  },
  {
    name: "Mery Oruna",
    role: "Atleta amateur",
    comment:
      "... llegue al box vibrando super bajo. Desde que llegue a bullbox logre superar mis limites gracias al apañe y motivación de parte de todos. Aca no solo se entrena cuerpo sino que también se entrena la mente, el superar tus demonios.",
    image: "/testimonials/pablo.jpg",
  },
  {
    name: "Jazmin",
    role: "Miembro",
    comment:
      "... antes no tenia confianza en mi misma y desde que extoy aqui mi confianza es mayor, en que puedo lograr cosas que antes no hubiera podido hacer.",
    image: "",
  },
  {
    name: "Manuel Galvez",
    role: "Atleta Amateur",
    comment:
      "Una gran escuela, grandes personas, empatia, una entrega total, es aprendizaje. Bullbox es uno de los mejores lugares en los que he caído en la vida",
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
      { time: "07:00 - 08:00", type: "METCON" },
      { time: "08:00 - 09:00", type: "CROSSFIT" },
      { time: "10:00 - 11:00", type: "GAP" },
      { time: "18:00 - 19:00", type: "GAP" },
      { time: "19:00 - 20:00", type: "CROSSFIT" },
      { time: "19:30 - 20:30", type: "MUAY THAI" },
      { time: "20:00 - 21:00", type: "CROSSFIT" },
      { time: "21:00 - 22:00", type: "OPEN BOX / HALTEROFILIA" },
    ],
  },
  {
    day: "Martes - Jueves",
    desc: "",
    classes: [
      { time: "06:00 - 07:00", type: "CROSSFIT" },
      { time: "18:30 - 19:30", type: "KARATE" },
      { time: "19:00 - 20:00", type: "CROSSFIT" },
      { time: "20:00 - 21:00", type: "MUAY THAI" },
      { time: "20:00 - 21:00", type: "CROSSFIT" },
      { time: "21:00 - 22:00", type: "HALTEROFILIA / OPEN BOX" },
    ],
  },
  {
    day: "Sabado",
    desc: "",
    classes: [{ time: "10:00", type: "CROSSFIT" }],
  },
  // Agrega más días según necesites
];

export const contactInfo = {
  address: "Roma 2161, Conchali, Region Metropolitana",
  phone: "+56 9 7978 9434",
  email: "contacto@bullbox365.cl",
  instagram: "https://www.instagram.com/crossfit_bullbox365/",
  whatsapp: "https://wa.me/+56979789434",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.9332390570703!2d-70.67333150000002!3d-33.39890589999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662c76bb0a465d3%3A0x4ecdccb7c666ebe5!2sBullbox%20365!5e0!3m2!1ses!2scl!4v1753738331376!5m2!1ses!2scl", // opcional
};

export const otherSports = [
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
  { name: "", src: "" },
];
