import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ImageCard = ({ name, src, desc, title }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative bg-black/5 backdrop-blur-sm rounded-xl shadow-sm shadow-orange-500/60 h-100 p-6 text-white text-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/20 z-10 h-auto rounded-2xl"></div>
      {/* <div className="relative z-20 top-80 max-w-4xl mx-auto text-center md:text-center h-full">
        <h4 className="text-xl font-bold text-orange-500">
          {title.toUpperCase()}
        </h4>
      </div> */}
    </motion.div>
  );
};

export default ImageCard;
