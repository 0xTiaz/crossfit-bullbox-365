import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "../../lib/utils";

const CoachCard = ({ name, role, image, bio, alias, grid }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={cn(
        "relative bg-black/5 backgrop-blur-sm rounded-xl shadow-sm shadow-orange-500/60 h-100 p-6 text-white text-center",
        grid ? "w-90" : "w-full"
      )}
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0 rounded-2xl"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 h-auto rounded-2xl"></div>
      <div className="relative z-20 top-60 max-w-4xl mx-auto text-center md:text-center h-full">
        <h4 className="text-xl font-bold text-orange-500">
          {name} - "{alias}"
        </h4>
        <p className="text-sm text-white/70">{role}</p>
        <p className="text-md text-justify font-semibold italic">{bio}</p>
      </div>
    </motion.div>
  );
};

export default CoachCard;
