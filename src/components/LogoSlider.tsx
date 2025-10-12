"use client";

import { useEffect, useState } from "react";

const LogoSlider = ({ small = false }: { small?: boolean }) => {
  const logos = [
    { name: "Mg Engineers", image: "/assets/partners/mg-engineers.png", scale: "0.9" },
    { name: "Klančar", image: "/assets/partners/klancar.png", scale: "1" },
    { name: "Spanos", image: "/assets/partners/spanos.svg", scale: "1" },
    { name: "Intech Group", image: "/assets/partners/intech.svg", scale: "1" },
    { name: "Tecon", image: "/assets/partners/tecon.png", scale: "1" },
    { name: "Ringer", image: "/assets/partners/ringer.png", scale: "1.3" },
    { name: "Sweco", image: "/assets/partners/sweco.png", scale: "0.9" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const animationDuration = isMobile ? "15s" : "25s";

  return (
    <div className="relative w-full overflow-hidden">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left linear infinite;
        }
      `}</style>

      {/* gradient fade sides */}
      <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      {/* scrolling container */}
      <div
        className="flex animate-scroll-left"
        style={{
          animationDuration,
          width: `calc(200% + (${isMobile ? 1 : 2}rem * ${logos.length * 2}))`,
        }}
      >
        {/* duplicated logos for seamless loop */}
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className={`flex ${
              small ? "min-w-[150px]" : "min-w-[200px]"
            } max-md:min-w-[120px] items-center justify-center px-2 md:px-4 transition-all duration-300`}
            style={{ transform: `scale(${logo.scale})` }}
          >
            <img
              src={logo.image}
              alt={logo.name}
              className="w-auto h-10 md:h-12 object-contain grayscale opacity-90"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlider;
