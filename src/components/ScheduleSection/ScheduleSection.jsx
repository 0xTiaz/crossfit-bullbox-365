import React from "react";

const ScheduleSection = ({ data }) => {
  return (
    <section className="bg-black py-20 px-6 text-white" id="schedule">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Horarios Semanales
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-left">
          {data.map((day, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-orange-500 rounded-xl p-6 shadow-md "
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {day.day}
              </h3>
              <ul className="space-y-3">
                {day.classes.map((item, i) => (
                  <li key={i}>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/80">{item.value}</span>
                      <span className="text-orange-400 font-semibold">
                        {item.type}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
