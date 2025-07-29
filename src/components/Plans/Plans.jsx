import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import PlanCard from "./PlanCard";

const Plans = ({ data }) => {
  const fullRows = Math.floor(data.length / 3) * 3;
  const remainingItems = data.length % 3;
  return (
    <section className="bg-[#121212] py-20 px-6 text-white" id="plans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Elige el plan perfecto para ti
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {data.slice(0, fullRows).map((plan) => (
            <PlanCard plan={plan} />
          ))}
        </div>
        {remainingItems > 0 && (
          <div className="mt-8 flex justify-center gap-8 flex-wrap">
            {data.slice(fullRows).map((plan) => (
              <PlanCard plan={plan} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Plans;
