"use client";

import React, { useState } from "react";
import { GiClick } from "react-icons/gi";
import { project } from "@/Config/Config";

interface ProjectProps {
  project: project;
  
}

export const Card = ({ project }: ProjectProps) => {

  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="group h-[200px] [perspective:1000px] cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-all duration-700 [transform-style:preserve-3d]
           ${isFlipped ? "[transform:rotateY(180deg)]" : ""
          }`}
      >
        {/* front*/}
        <div className="w-full h-full [backface-visibility:hidden] 
        shadow-lg rounded-xl overflow-hidden bg-[url(/Works/CardFront.webp)] bg-no-repeat bg-center bg-cover">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain p-2 rounded-2xl "
          />
          <span className="text-yellow-700 absolute bottom-2 right-2"><GiClick size={25} /></span>

        </div>



        {/* back*/}
        <div className="absolute inset-0 w-full h-full bg-[url(/Works/CardBack.webp)] bg-no-repeat bg-center bg-cover
         text-white [transform:rotateY(180deg)]
         [backface-visibility:hidden] shadow-lg rounded-xl flex flex-col justify-center items-center p-6 text-center">

          <h3 className="text-xl font-bold mb-3 text-White">
            {project.title}
          </h3>

          <p className="text-yellow-800 bg-white/80 p-1 rounded-lg text-sm mb-6 leading-relaxed">
            {project.desc}
          </p>

          <div className="flex gap-3">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#F6FFDC] text-[#3C2A21] hover:bg-white"
            >
              Live
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-white text-black hover:bg-[#F6FFDC]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};