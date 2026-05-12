"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const blogs = [
    {
        title: "🚀 Stop Redefining Your Interfaces: 6 TypeScript Utility Types You Actually Need",
        desc: "",
        date: "February 13, 2026",
        href: "https://www.linkedin.com/pulse/stop-redefining-your-interfaces-6-typescript-utility-types-madgulkar-jj2af/",
        tags: ["TypeScript", "Best Practices"]
    },
    // {
    //     title: "Building a Scalable Role-Based System in React",
    //     desc: "How I designed and implemented a role-based access control system used across multiple municipal applications with dynamic UI rendering.",
    //     date: "April 2026",
    //     href: "#",
    //     tags: ["React", "Architecture"]
    // },
    // {
    //     title: "Optimizing Large-Scale React Apps with Redux Toolkit",
    //     desc: "Lessons from managing complex state and improving performance in production-grade applications like SMIS and licensing systems.",
    //     date: "March 2026",
    //     href: "#",
    //     tags: ["Redux", "Performance"]
    // },
    // {
    //     title: "Designing Multi-Level Approval Workflows",
    //     desc: "Breaking down the architecture behind a 4-layer approval system used in government compliance platforms.",
    //     date: "March 2026",
    //     tags: ["System Design", "Backend"]
    // },
];

export default function Blogs() {
    const BlogsRef = useRef<HTMLDivElement>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        if (!BlogsRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => setInView(entry.isIntersecting),
            { threshold: 0.25 }
        );

        observer.observe(BlogsRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={BlogsRef}
            id="blogs"
            className="relative pb-20 bg-black text-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6">
                {/* ===== HEADING ===== */}
                <div
                    className={`mt-16 mb-16 text-center           transition-all duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                >
                    <h2 className="text-[4rem] sm:text-[5rem] md:text-[5.5rem] font-extrabold tracking-widest bg-linear-to-b from-white/15 to-white/10 bg-clip-text text-transparent">
                        BLOGS
                    </h2>

                    <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
                        Insights on building scalable React applications, role-based systems,
                        and lessons learned from real-world municipal and enterprise projects.
                    </p>
                </div>

                {/* ===== BLOG GRID ===== */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((blog, i) => (
                        <Link
                            key={i}
                            href={blog.href || "#"}
                            className={`bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-orange-500/50 transition-all group duration-1000 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
                            style={{ transitionDelay: `${i * 120}ms` }}
                        >
                            <div className="text-orange-400 text-sm mb-3">ARTICLE</div>

                            <h3 className="text-2xl font-semibold mb-3 group-hover:text-orange-400 transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-gray-400 line-clamp-3">
                                {blog.desc}
                            </p>

                            {/* TAGS */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {blog.tags?.map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex justify-between items-center text-sm">
                                <span className="text-gray-500">{blog.date}</span>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* ===== FOOTER NOTE ===== */}
                <p className="text-center text-gray-500 mt-16">
                    More deep-dive articles coming soon...
                </p>
            </div>
        </section>
    );
}