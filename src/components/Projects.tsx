"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function ProjectCard({
  title,
  year,
  type,
  description,
  tech,
  image,
  live,
  github,
  placeholder = false,
}: {
  title: string;
  year: string;
  type: string;
  description: string;
  tech?: string[];
  image?: string;
  live?: string;
  github?: string;
  placeholder?: boolean;
}) {
  return (
    <div
      className="relative flex flex-col p-4 md:p-2 md:flex-row min-h-80 md:h-full rounded-3xl overflow-hidden bg-white/4 border border-white/10 backdrop-blur-xl"
    >
      {/* CONTENT */}
      <div className="flex flex-col justify-between md:p-4 md:w-1/2">
        <div>
          <span className="inline-block mb-4 px-4 py-1 text-xs rounded-full border border-orange text-orange-400">
            {year} · {type}
          </span>

          <h3 className="text-2xl md:text-3xl font-semibold mb-3 bg-linear-to-r from-orange-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            {title}
          </h3>

          <p className="text-sm text-gray-400 leading-relaxed">
            {description}
          </p>

          {tech && (
            <div className="flex flex-wrap gap-2 mt-5">
              {tech.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs rounded-full border border-white/10 text-gray-300"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {!placeholder && (
          <div className="flex gap-3 mt-6">
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-circle"
              >
                ↗
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-circle"
              >
                <i className="devicon-github-original text-[20px]" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* IMAGE */}
      {!placeholder && image && (
        <div className="relative md:w-full h-45 md:h-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

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
      id="projects"
      ref={sectionRef}
      className="relative mt-16 md:pt-10 md:pb-10 bg-black overflow-hidden scroll-mt-30"
    >
      {/* HEADING */}
      <div
        className={`
          absolute inset-x-0 top-0 flex justify-center pointer-events-none
          transition-all duration-1000 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        `}
      >
        <h2
          className="text-[4rem] sm:text-[5rem] md:text-[5.5rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/10 bg-clip-text text-transparent select-none"
        >
          PROJECTS
        </h2>
      </div>

      {/* CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto mt-28 sm:mt-32 grid grid-cols-1 md:grid-cols-1 gap-8 md:gap-10 px-6 pb-10"
      >
        <div
          className={`transition-all duration-1000 ease-out delay-100 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="School Management Information System (SMIS)"
            year="2025 & 2026"
            type="Municipal Platform"
            description="A large-scale role-based React.js platform built for Pimpri Chinchwad Municipal Corporation to manage student records, attendance, staff data, and hierarchical holiday systems across multiple schools."
            tech={[
              "React.js",
              "TypeScript",
              "Redux Toolkit",
              "Redux Persist",
              "Tailwind CSS"
            ]}
            image="/smis.png"
            live="https://dev.mis.chdc.foxberry.live/"
          />
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="Garden E-Ticketing Platform"
            year="2026"
            type="Public Sector Application"
            description="MERN full-stack platform for Pimpri Chinchwad Municipal Corporation. Built real-time QR ticketing system with secure Node.js + Express RESTful APIs, scalable MongoDB schemas, EaseBuzz payment integration, and Redux-managed frontend to eliminate manual cash handling across multiple municipal gardens." tech={[
              "MERN Stack",
              "React.js",
              "TypeScript",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Redux Toolkit",
              "Tailwind CSS",
              "Payment Gateway Integration"
            ]}
            image="/garden.png"
            live="http://garden.pcmcsmartsarathi.org/"
          />
        </div>

        {/* <div
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="Clinic Licensing & Registration System"
            year="2025"
            type="Government Compliance Platform"
            description="Engineered a production-grade, role-based regulatory platform for clinic and pathology licensing. Designed a 4-layer administrative approval workflow (Admin → HOD → Multi-Level Approvers) with secure payment integration, automated certificate generation, and complete audit tracking for compliance enforcement."
            tech={[
              "React.js",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "Approval Workflow Engine",
              "Payment Integration"
            ]}
            image="/clinic.png"
            live="https://stg.citizen.clinic.chdc.foxberry.live/"
          />
        </div> */}

        {/* <div
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="SmartSpace – Hotel & Meeting Room Management System"
            year="2025"
            type="SaaS Web Application"
            // description="A full-featured hotel and meeting room management platform enabling room booking, approval workflows, utilization tracking, and role-based access control. Designed for enterprises, hotels, and co-working spaces to manage room reservations, reporting, and operational efficiency."
            description="Designed and developed a scalable room and facility management system with multi-role authentication (Admin, Manager, User). Implemented real-time booking workflows, approval pipelines, utilization analytics, and reporting dashboards to optimize space allocation and operational transparency."
            tech={[
              "React.js",
              "TypeScript",
              "Redux Toolkit",
              "Tailwind CSS",
              "Role-Based Access Control",
              "Booking Workflow Engine"
            ]}
            image="/hrms.png"
          // live="https://your-live-link.com"
          />
        </div>

        <div
          className={`transition-all duration-1000 ease-out delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 -y-16"}`}
        >
          <ProjectCard
            title="Feature Visibility & Access Control Platform"
            year="2025"
            type="Internal Engineering Tool"
            description="Centralized role-based feature management system designed to control UI visibility across multiple web and mobile applications, reducing developer rework and accelerating deployment cycles."
            tech={[
              "React.js",
              "Redux Toolkit",
              "Role-Based Access Control",
              "Reusable Component Architecture"
            ]}
            // image="/feature-platform.png"
            placeholder
          />
        </div> */}
      </div>
    </section>
  );
}
