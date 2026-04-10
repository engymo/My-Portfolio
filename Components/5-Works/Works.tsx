"use client";

import React from "react";
import { projects } from "@/Data/WorksData/WorksData";

export default function Works() {
    return (
        <section id="works" className="container mx-auto px-4">

            {/* Title */}
            <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center bg-contain w-full h-[100px] my-[7%] flex items-center justify-center'>
                <h2 className="text-4xl text-center font-bold text-[#603F26]">
                    Works
                </h2>
            </div>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="shadow-lg bg-[#D2C4B4] pt-2 pb-10"
                    >

                        {/* Image wrapper */}
                        <div className="relative overflow-hidden group touch-manipulation">

                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-fit object-contain px-2"
                            />

                            {/* Overlay */}
                            <div
                                className="
                                    absolute inset-0 bg-black/70 flex flex-col justify-center items-center
                                    text-center transition duration-500 mx-2

                                    /* Desktop hover */
                                    opacity-0 group-hover:opacity-100

                                    /* Mobile fallback (always allow tap feel) */
                                    active:opacity-100
                                "
                            >
                                <h3 className="text-white text-xl font-bold mb-2">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 text-sm mb-4">
                                    {project.desc}
                                </p>

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
                    </div>
                ))}

            </div>
        </section>
    );
}