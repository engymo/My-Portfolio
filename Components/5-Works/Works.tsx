import React from "react";
import {projects } from "@/Data/WorksData/WorksData";

export default function Works() {
    return (
        <section id="works" className="container mx-auto px-4">

            {/* Title */}
            <div className="text-center mb-14">
                <h2 className="text-center mb-5 text-[#603F26] my-[5%] lg:my-[7%] font-bold text-4xl">
                    My Projects
                </h2>
            </div>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="relative group rounded-2xl overflow-hidden shadow-lg"
                    >

                        {/* Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-fit object-contain"
                        />

                        {/* Overlay */}
                        <div
                            className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center
              text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500"
                        >
                            <h3 className="text-white text-xl font-bold mb-2">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 text-sm mb-4">
                                {project.desc}
                            </p>

                            {/* Buttons */}
                            <div className="flex gap-3">
                                {[
                                    { name: "Live", link: project.live, style: "bg-[#F6FFDC] text-[#3C2A21]" },
                                    { name: "GitHub", link: project.github, style: "border border-white text-white" },
                                ].map((btn, i) => (
                                    <a
                                        key={i}
                                        href={btn.link}
                                        target="_blank"
                                        className={`px-4 py-2 rounded-lg text-sm font-semibold transition
      ${btn.style} hover:bg-white hover:text-black`}
                                    >
                                        {btn.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </section>
    );
}