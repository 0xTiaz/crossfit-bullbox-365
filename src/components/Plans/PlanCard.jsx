import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const PlanCard = ({ plan }) => {
  return (
    <div className="bg-[#1a1a1a] border border-orange-500 rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-bold text-orange-400">{plan.name}</h3>
      <p className="text-white text-2xl font-semibold mt-2">{plan.price}</p>
      <p className="text-white/60 text-sm mt-2">{plan.description}</p>
      <ul className="text-left mt-4 space-y-2">
        {plan.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm">
            <BiCheckCircle size={15} className="text-orange-500" />
            {benefit}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-6 inline-block bg-orange-500 text-black font-bold py-2 px-4 rounded-full hover:bg-orange-600 transition-colors duration-300"
      >
        Inscribirme!
      </a>
    </div>
  );
};

export default PlanCard;
