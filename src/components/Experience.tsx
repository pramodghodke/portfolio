"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    date: "Nov 2022 – present",
    company: "Foxberry Technologies Pvt. Ltd.",
    location: "Pune, Maharashtra, India",
    mode: "Full time",
    role: "Senior Solution Developer (ReactJS)",
    description:
      "Building scalable full-stack MERN applications for Pimpri Chinchwad Municipal Corporation. Delivered large-scale public sector platforms used by thousands of citizens daily.",
    points: [
      "Spearheaded full-stack development (React.js, Node.js, Express.js, MongoDB) for multiple high-impact municipal applications.",
      "Engineered a custom internal MERN platform and shared UI library to centrally manage feature visibility and role-based access across all projects.",
      "Developed key public applications including School Management Information System, Garden E-Ticketing Platform, and Clinic Licensing & Registration System.",
      "Reduced developer rework by 40% and accelerated deployment time by 30% through reusable components and standardized full-stack workflows."
    ],
    tech: [
      "MERN Stack",
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Redux Persist",
      "Tailwind CSS",
      "Mongoose",
      "Vite",
      "Git"
    ],
  },
  // {
  //   date: "Jan 2024 – Feb 2025",
  //   company: "Program-Warehouse Pvt. Ltd.",
  //   location: "Jaipur, India",
  //   mode: "Remote",
  //   role: "Frontend (React) Developer",
  //   description:
  //     "Contributed to live React.js applications with a focus on clean architecture, state management, and responsive design.",
  //   points: [
  //     "Built responsive, production-ready React.js applications from design mockups using Tailwind CSS.",
  //     "Implemented efficient state management with Redux and Context API.",
  //     "Collaborated with backend teams to integrate RESTful APIs and ensure seamless data flow.",
  //     "Improved UI performance and cross-device user experience."
  //   ],
  //   tech: [
  //     "React.js",
  //     "JavaScript",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Redux",
  //     "Context API",
  //     "Git"
  //   ],
  // }
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [inView, setInView] = useState(false);

  /* ===== TIMELINE SCROLL ===== */
  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const total = rect.height - windowHeight;
      const current = Math.min(Math.max(-rect.top, 0), total);

      setProgress(total > 0 ? current / total : 0);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== SECTION VISIBILITY ===== */
  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.05 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative pt-30 pb-20 bg-black text-white overflow-hidden"
    >
      {/* HEADING */}
      <div
        className={`absolute inset-x-0 top-0 flex justify-center pointer-events-none
          transition-all duration-1000 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <h2
          className="py-20 text-[3rem] sm:text-[4.5rem] md:text-[5.5rem] font-extrabold tracking-widest bg-linear-to-b from-white/30 to-white/10 bg-clip-text text-transparent"
        >
          EXPERIENCE
        </h2>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto mt-28 px-6">
        {/* ===== MOBILE TIMELINE ===== */}
        <div className="md:hidden absolute left-4 top-0 h-full">
          <div className="relative h-full w-0.75 bg-white/10 rounded-full">
            <div
              className="absolute top-0 w-0.75 rounded-full"
              style={{
                height: `${progress * 100}%`,
                background:
                  "linear-gradient(180deg, #f12711, #f5af19, #f7ff00)",
              }}
            />
            <div
              className="absolute -left-1.5"
              style={{ top: `calc(${progress * 100}% - 8px)` }}
            >
              <div className="w-4 h-4 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* ===== DESKTOP / TABLET TIMELINE ===== */}
        <div className="hidden md:block absolute left-1/3 top-0 h-full -translate-x-1/2">
          <div className="relative h-full w-0.5 bg-white/10">
            <div
              className="absolute top-0 w-0.5"
              style={{
                height: `${progress * 100}%`,
                background:
                  "linear-gradient(180deg, #f12711, #f5af19, #f7ff00)",
              }}
            />
            <div
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `calc(${progress * 100}% - 6px)` }}
            >
              <div className="w-3 h-3 rounded-full bg-white" />
            </div>
          </div>
        </div>

        {/* EXPERIENCE BLOCKS */}
        <div className="space-y-16 md:space-y-32">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-[1fr_80px_2fr] gap-5 items-start pl-10 md:pl-0 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* META */}
              <div className="text-sm text-gray-400">
                <div className="uppercase tracking-wide text-xs mb-1">
                  {exp.date}
                </div>
                <h3 className="text-2xl font-semibold mb-1 bg-linear-to-r from-orange-400 via-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                  {exp.company}
                </h3>
                <div className="text-gray-500">{exp.location}</div>
                <div className="text-gray-500">{exp.mode}</div>
              </div>

              <div className="hidden md:block" />

              {/* CONTENT */}
              <div>
                <h4 className="text-3xl md:text-2xl font-semibold mb-2 bg-linear-to-r from-orange-400 via-yellow-400 to-yellow-400 bg-clip-text text-transparent">
                  {exp.role}
                </h4>

                <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-2 text-gray-300 leading-relaxed">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>• {p}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full border border-white/25 text-gray-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
