"use client";
import React from "react";
import Link from "next/link";
import Hero from "../3-Hero/Hero";
import { useState, useEffect } from "react";
import { ButtonsSectionData } from "@/Data/HeaderData/HeaderData";


// Texts for the rotating subtitle

export default function Header() {
    const texts = ["Welcome to my website", "Angie Mohammad Ali"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);


    return (
        <header className=" min-h-[200px] container mx-auto px-4 flex flex-col 
              lg:flex-row mt-20 lg:mt-15">

            <div className="flex flex-col lg:flex-row items-center justify-center gap-10">

                {/* Left Content */}

                <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">

                    {/* Subtitle */}

                    <h4
                        className="relative h-10 mb-4 text-[#C5705D] font-bold text-2xl overflow-hidden"
                        style={{ perspective: "1000px" }}
                    >
                        {texts.map((text, i) => (
                            <span
                                key={i}
                                className={`absolute inset-0 flex items-center justify-start transition-all duration-700 ease-in-out transform-gpu`}
                                style={{
                                    transform: i === index
                                        ? "rotateY(0deg) translateX(0)"
                                        : "rotateY(-90deg) translateX(100px)",
                                    opacity: i === index ? 1 : 0,
                                    visibility: i === index ? "visible" : "hidden",
                                }}
                            >
                                {text}
                            </span>
                        ))}
                    </h4>

                    {/* Title */}

                    <h1 className="text-3xl lg:text-5xl font-bold text-[#603F26] ">
                        I am a Front end web developer
                    </h1>

                    {/* Description */}

                    <p className="text-sm mt-3 font-bold text-[#A79277]">
                        "Passionate web designer and developer, crafting elegant, fast and accessible websites.
                        I turn design concepts into beautiful, functional web experiences that blend aesthetics with seamless usability."
                    </p>

                    {/* Buttons */}

                    <div className="mt-5 flex flex-wrap gap-4 text-[#603F26] font-bold">
                        {ButtonsSectionData.map((btn) => (
                            <Link
                                key={btn.id}
                                href={btn.link}
                                className="bg-[#A79277] text-white px-4 py-2 rounded-xl shadow-lg hover:bg-[#A79277]/80 transition"
                            >
                                {btn.name}
                            </Link>
                        ))}
                    </div>

                    {/* Social Links*/}

                    <Hero />
                </div>

                {/* Right Image */}

                <div className="w-full lg:w-1/2 order-1 lg:order-2">
                    <img
                        src="/Header/header.webp"
                        alt="header"
                        width={500}
                        height={500}
                        className="w-full h-auto"
                    />
                </div>

            </div>
        </header>
    );
}