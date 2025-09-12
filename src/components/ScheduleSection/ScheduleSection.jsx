import React from "react";
import { FaCalendar } from "react-icons/fa";

const ScheduleSection = ({ data }) => {
  return (
    <section className="bg-black py-20 px-6 text-white" id="schedule">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-12">
          Horarios Semanales
        </h2>
        <div className="grid gap-8 md:grid-cols-2 text-left">
          <div className="rounded-xl shadow-sm shadow-orange-500 h-fit">
            <img src="/horarioAM.jpeg" className="rounded-xl " alt="" />
          </div>
          <div className="rounded-xl shadow-sm shadow-orange-500">
            <img src="/horarioPM.jpeg" alt="" className="rounded-xl" />
          </div>

          {/* {data.map((day, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-orange-500 rounded-xl p-6 shadow-md "
            >
              <h3 className="text-xl text-center font-semibold text-white mb-4">
                {day.day}
              </h3>
              <p>{day.desc}</p>
              <ul className="space-y-3">
                {day.classes.map((item, i) => (
                  <li key={i} className="text-end">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/80">{item.time}</span>
                      <span className="text-orange-400 font-semibold">
                        {item.type}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
