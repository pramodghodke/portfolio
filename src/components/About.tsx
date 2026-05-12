"use client";

import { Download } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1);
      setScrollOffset(progress * 12);
    };

    window.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative mt-20 md:mb-10 min-h-[85vh] md:min-h-screen bg-black text-white overflow-hidden"
    >
      {/* SECTION HEADING */}
      <div className="relative flex items-center justify-center mb-10">
        <h2 className="text-[4.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/10 bg-clip-text text-transparent select-none">
          ABOUT
        </h2>
      </div>

      {/* DESKTOP VIDEO */}
      <div
        className={`hidden md:block absolute left-0 transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
          }`}
        style={{ top: "260px", transform: `translateY(${inView ? -scrollOffset : 16}px)` }}
      >
        <div className="w-105 lg:w-130 aspect-auto rounded-tr-3xl rounded-br-3xl shadow-[0_30px_80px_rgba(0,0,0,0.7)] overflow-visible">
          <video
            src="/about-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-10 md:pl-90 lg:pl-115">
        <div
          className={`transition-all duration-1000 ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
            }`}
          style={{ transform: `translateY(${inView ? -scrollOffset : 16}px)` }}
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Hi, I’m{" "}
            <span className="bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Pramod
            </span>
          </h3>

          <p className="mt-6 text-gray-400 leading-relaxed w-full">
            Frontend Engineer with 3.5+ years of experience developing scalable, user-focused web applications using
            React.js and modern frontend technologies. Experienced in building responsive, performance-oriented 
            interfaces with strong focus on usability, component architecture, workflow optimization, and clean engineering
            practices. Skilled in mentoring junior developers, collaborating across teams, and delivering business-critical
            solutions within timelines. Possesses working knowledge of Node.js, Express.js, and MongoDB, enabling
            effective full-stack collaboration and system understanding.
          </p>

          {/* WHAT I DO */}
          <div className="mt-10">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
              What I do
            </p>

            <div className="flex flex-wrap gap-3">
              {[
                "MERN Stack Development",
                "React.js Architecture",
                "TypeScript Development",
                "Redux Toolkit State Management",
                "Role-Based Access Systems",
                "Reusable UI Component Libraries",
                "Performance Optimization",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CONNECT + RESUME */}
          <div className="mt-12 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            {/* Mobile Video + Resume */}
            <div className="md:hidden flex gap-5 items-center -ml-6">
              <div className="w-30 aspect-auto rounded-xl overflow-hidden">
                <video
                  src="/about-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex px-6 py-4 gap-3 items-center rounded-xl bg-white/5 border border-white/10 uppercase tracking-widest text-md hover:bg-white/10 transition text-center">
                <Download />
                <a
                  href="/Pramod_Ghodke_Resume_7249456632.pdf"
                  download="Pramod_Ghodke_Resume_7249456632.pdf">
                  Resume 
                </a>
              </div>
            </div>

            {/* Desktop Connect */}
            {/* <div className="hidden md:block">
              <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Connect with me
              </p>
              <div className="flex gap-4">
                <a href="https://github.com/harshalmadgulkar" target="_blank" rel="noopener noreferrer">
                  <IconWrap><FaGithub size={18} /></IconWrap>
                </a>
                <a href="https://www.linkedin.com/in/harshal-madgulkar" target="_blank" rel="noopener noreferrer">
                  <IconWrap><FaLinkedin size={18} /></IconWrap>
                </a>
                <a href="mailto:harshal.madgulkar725@gmail.com">
                  <IconWrap><FaEnvelope size={18} /></IconWrap>
                </a>
              </div>
            </div> */}

            {/* Desktop Resume Button */}
            <a
              href="/Pramod_Ghodke_Resume_7249456632.pdf"
              target="_blank"
              rel="noopener noreferrer"
              // download="Pramod_Ghodke_Resume_7249456632.pdf"
              className="hidden md:flex gap-4 items-center px-10 py-6 rounded-xl bg-white/5 border border-white/10 uppercase 
              tracking-widest text-sm hover:bg-white/10 transition"
            >
              <Download /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IconWrap({ children }: { children: React.ReactNode; }) {
  return (
    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 hover:bg-white/10 transition">
      {children}
    </div>
  );
}