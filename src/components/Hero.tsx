"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const [floatY, setFloatY] = useState(0);

  useEffect(() => {
    setMounted(true);
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    let frame = 0;
    const animate = () => {
      frame += 0.015;
      setFloatY(Math.sin(frame) * 16);
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!imageRef.current || isTouch) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black overflow-hidden flex justify-center items-center"
    >

      <h1 className="sr-only">
        Pramod Ghodke - ReactJS Developer
      </h1>
      {/* =========================
          BACKGROUND TEXT
      ========================= */}

      {/* DESKTOP / TABLET */}
     <div
  className={`hidden md:flex absolute inset-0 items-center justify-center transition-opacity duration-1000
    ${mounted ? "opacity-100" : "opacity-0"}
  `}
  style={{ zIndex: 1 }}
>
  <div
    className={`
      text-[4.5rem] lg:text-[7rem]
      font-extrabold
      bg-linear-to-b from-white/15 to-white/6
      bg-clip-text text-transparent
      select-none
      transition-all duration-1000 ease-out
      ${mounted ? "translate-x-0 opacity-100" : "-translate-x-32 opacity-0"}
    `}
  >
    PRAMOD
  </div>

  {/* CENTER CHARACTER SPACE */}
  <div className="w-24 lg:w-90 flex justify-center">
    <span className="text-white/10 text-7xl lg:text-9xl font-black">
      P
    </span>
  </div>

  <div
    className={`
      text-[4.5rem] lg:text-[7rem]
      font-extrabold
      bg-linear-to-b from-white/15 to-white/6
      bg-clip-text text-transparent
      select-none
      transition-all duration-1000 ease-out
      ${mounted ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"}
    `}
  >
    GHODKE
  </div>
</div>

      {/* MOBILE — SPLIT TEXT */}
      {/* <div
        className={`md:hidden absolute top-14 flex items-center justify-center transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"
          }`}
        style={{ zIndex: 1 }}
      >
        <svg viewBox="0 0 300 300" className="w-96 h-96 -rotate-90">
          <defs>
            <path
              id="circlePath"
              d="
          M150,150
          m-100,0
          a100,100 0 1,1 200,0
          a100,100 0 1,1 -200,0
        "
            />
          </defs>

          <text
            fill="url(#grad)"
            fontSize="28"
            fontWeight="900"
            letterSpacing="8"
          >
            <textPath href="#circlePath" startOffset="50%" textAnchor="middle">
              PRAMOD
            </textPath>
          </text>

          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.15)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}

      {/* =========================
          PORTRAIT
      ========================= */}
      <div
        className={`absolute left-1/2 top-70 md:top-90 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ zIndex: 3 }}
      >
        <div
          ref={imageRef}
          className="relative w-70 h-115 md:w-95 md:h-120 lg:w-115 lg:h-140"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => !isTouch && setHovered(true)}
          onMouseLeave={() => !isTouch && setHovered(false)}
          style={{
            transform: `translateY(${floatY}px)`,
            transition: "transform 0.2s ease-out",
          }}
        >
          <Image
            src="/normal.png"
            alt="Pramod Ghodke - MERN Stack Developer Portrait"
            fill
            priority
            className="object-cover rounded-xl"
          />

          {!isTouch && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                opacity: hovered ? 1 : 0,
                transition: "opacity 0.25s ease-out",
                clipPath: hovered
                  ? `circle(80px at ${mousePos.x}% ${mousePos.y}%)`
                  : `circle(0px at 50% 50%)`,
              }}
            >
              <Image
                src="/robotic.png"
                alt="Futuristic developer illustration of Pramod Ghodke"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          )}
        </div>
      </div>

      {/* =========================
          MOBILE TEXT STACK
      ========================= */}
      <div
        className={`
          md:hidden
          w-full
          absolute left-1/2
          -translate-x-1/2
          top-[66%]
          text-center
          max-w-[90%]
          transition-all duration-1000 delay-300
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
        `}
        style={{ zIndex: 4 }}
      >
        {/* <h2 className="text-4xl font-bold bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          Building Real-World  <br /> Web Products
        </h2> */}

        {/* <p className="text-[0.9rem] mt-2 text-gray-400">
          I build scalable React.js applications with reusable component architecture, role-based access systems, and performance-optimized UI used in real-world municipal platforms.
        </p> */}

        <h2 className="text-4xl font-bold bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          ReactJS Developer
        </h2>

        <p className="text-[0.9rem] mt-2 text-gray-400">
          React • Node • TypeScript • Scalable Architecture
        </p>
      </div>

      {/* =========================
          DESKTOP TEXT (UNCHANGED)
      ========================= */}
      <div className="hidden md:block absolute bottom-20 left-20 max-w-md z-10">
        <h2 className="text-lg font-bold bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
          Building Real-World Web Products
        </h2>
        <p className="text-sm mt-1 text-gray-500">
          I build scalable MERN Stack applications with reusable component architecture, role-based access systems, and performance-optimized UI used in real-world municipal platforms.
        </p>
      </div>

      <div className="hidden md:block absolute bottom-20 right-20 text-right z-10">
        <p className="text-sm text-gray-500">
          <span className="text-lg bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            ReactJS Developer
          </span>
          <br />
          React • Node • TypeScript • Scalable Architecture
        </p>
      </div>
    </section>
  );
}
