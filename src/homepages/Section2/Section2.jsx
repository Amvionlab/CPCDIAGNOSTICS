import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import world from "./images/humanitarian.gif";
import Employees from "./images/management.gif";
import Customers from "./images/loyalty.gif";
import Principles from "./images/consultation.gif";
import partners from "./images/warehouse.gif";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  const stats = [
    { end: 3, label: "Country presence", img: world },
    { end: 300, label: "Employees", img: Employees },
    { end: 1000, label: "Customers", img: Customers },
    { end: 16, label: "Principals", img: Principles },
    { end: 500, label: "Channel partners", img: partners },
  ];

  const statRefs = useRef([]);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      statRefs.current.forEach((stat, index) => {
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: stats[index].end,
            duration: 1,
            ease: "power3.inOut",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div className="
    grid 
    grid-cols-1 gap-4 
    sm:grid-cols-3 
    tablet:grid-cols-5 
    justify-items-center 
    w-full 
    items-center 
    largeLaptop:h-fit
  ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 hover:scale-105 cursor-pointer duration-200 transition-all"
        >
          <div className="flex items-center flex-col justify-center ">
            <div className="flex mt-10">
              <img className="tablet:w-[100px] w-[100px] sm:w-[50px]" src={stat.img} alt="" />
              <span
                ref={(el) => (statRefs.current[index] = el)}
                className="text-[55px] tablet:text-4xl laptop:text-5xl font-semibold mt-4  "
                style={{ fontFamily: "Poppins", color: "#00A786" }}
              >
                {window.innerWidth < 768 ? stat.end : "0"}
              </span>
              <span
                className="text-4xl tablet:text-3xl mt-4"
                style={{ fontFamily: "Poppins, sans-serif", color: "#00A786" }}
              >
                +
              </span>
            </div>
            <p
              className="text-2xl tablet:text-sm laptop:text-lg sm:font-semibold font-semibold largeLaptop:text-xl"
              style={{ fontFamily: "Poppins" }}
            >
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Section2;
