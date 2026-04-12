"use client";

import React from "react";
import { projects } from "@/Data/WorksData/WorksData";
import { Card } from "./Card";

export default function Works() {


    return (
        <section id="works" className="container mx-auto px-4">

            {/* Title */}
            <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center bg-contain w-full
             h-[100px] my-[7%] flex items-center justify-center'>
                <h2 className="text-4xl text-center font-bold text-[#603F26]">
                    Works
                </h2>
            </div>

            {/* Cards */}

            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>


        </section>
    );
}