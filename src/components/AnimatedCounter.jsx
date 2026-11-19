import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      if (!counter) return;
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];
      if (!numberElement || !item) return;

      const countObj = { val: 0 };
      numberElement.textContent = `0${item.suffix}`;

      gsap.to(countObj, {
        val: item.value,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#counter",
          start: "top 98%",
          once: true,
        },
        onUpdate: () => {
          numberElement.textContent = `${Math.round(countObj.val)}${item.suffix}`;
        },
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg w-full">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="bg-zinc-900/90 border border-white/5 rounded-xl p-5 md:p-6 xl:p-6 2xl:p-8 flex flex-col justify-center backdrop-blur-md shadow-lg"
          >
            <div className="counter-number text-white font-display text-3xl md:text-4xl xl:text-5xl font-bold mb-1">
              {item.value}{item.suffix}
            </div>
            <div className="text-white/70 text-xs md:text-sm xl:text-base font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;