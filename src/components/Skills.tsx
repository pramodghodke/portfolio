"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const FRONTEND = [
  { name: "HTML", icon: "devicon-html5-plain" },
  { name: "CSS", icon: "devicon-css3-plain" },
  { name: "JavaScript", icon: "devicon-javascript-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "React", icon: "devicon-react-original" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain" },
  { name: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
  {
    name: "ShadCN UI",
    src: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjMDAwMDAwIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggIGQ9Ik0yMi4yMTkgMTEuNzg0TDExLjc4NCAyMi4yMTlhMS4wNDUgMS4wNDUgMCAwIDAgMS40NzYgMS40NzZMMjMuNjk1IDEzLjI2YTEuMDQ1IDEuMDQ1IDAgMCAwLTEuNDc2LTEuNDc2TTIwLjEzMi4zMDVMLjMwNSAyMC4xMzJhMS4wNDUgMS4wNDUgMCAwIDAgMS40NzYgMS40NzZMMjEuNjA4IDEuNzgxQTEuMDQ1IDEuMDQ1IDAgMCAwIDIwLjEzMi4zMDUiLz48L3N2Zz4="
  },
];

const STATE_BACKEND = [
  { name: "Redux", icon: "devicon-redux-original colored" },
  { name: "Zustand", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg" },
  { name: "Node.js", icon: "devicon-nodejs-plain" },
  { name: "Express", icon: "devicon-express-original" },
  { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "Redis", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
];

const TOOLS = [
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "GitHub", icon: "devicon-github-original" },
  { name: "GitLab", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" },
  { name: "VS Code", icon: "devicon-vscode-plain colored" },
  { name: "Postman", icon: "devicon-postman-plain" },
  { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "npm", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original.svg" },
  { name: "Bun", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" },
  { name: "Netlify", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg" },
  { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Framer Motion", icon: "devicon-framermotion-original colored" },
  { name: "Slack", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg" },
  { name: "LaTeX", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" },
];

function Marquee({
  items,
  reverse = false,
}: {
  items: { name: string; icon?: string; src?: string; }[];
  reverse?: boolean;
}) {
  return (
    <div className="relative overflow-hidden group">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10" />

      <div
        className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {items.map((item, i) => (
          <SkillPill key={`a-${i}`} item={item} />
        ))}
        {items.map((item, i) => (
          <SkillPill key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function SkillPill({
  item,
}: {
  item: { name: string; icon?: string; src?: string; };
}) {
  return (
    <div
      className="flex items-center gap-4 px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl bg-white/4 border border-white/40 backdrop-blur-xl text-gray-200 whitespace-nowrap"
    >
      {item.src ?
        <Image src={item.src} alt={item.name} width={24} height={24} />
        :
        <i className={`${item.icon} colored text-xl sm:text-2xl`} />
      }
      <span className="text-xs sm:text-sm font-medium">{item.name}</span>
    </div>
  );
}

export default function Skills() {
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
      const progress = Math.min(
        Math.max(1 - rect.top / window.innerHeight, 0),
        1
      );

      setScrollOffset(progress * 10);
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
      id="skills"
      className="relative pt-30 pb-10 sm:pt-10 sm:pb-14 md:pt-10 md:pb-10 bg-black overflow-hidden"
    >
      {/* BACKGROUND HEADING */}
      <div className="relative flex items-center justify-center mb-10">
        <h2 className="text-[4.5rem] sm:text-[5rem] md:text-[7rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/10 bg-clip-text text-transparent select-none">
          SKILLS
        </h2>
      </div>

      {/* MARQUEES */}
      <div
        className={`relative z-10 w-full mx-auto mt-24 sm:mt-32 md:mt-20 space-y-8 sm:space-y-10 md:space-y-12 transition-all duration-1000 ease-out delay-150 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} `}
        style={{ transform: `translateY(${inView ? -scrollOffset : 16}px)` }}
      >
        <Marquee items={FRONTEND} />
        <Marquee items={STATE_BACKEND} reverse />
        <Marquee items={TOOLS} />
      </div>
    </section>
  );
}
