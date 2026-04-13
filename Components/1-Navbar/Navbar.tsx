"use client";

import { useState } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { BiCode } from "react-icons/bi";
import { NavbarLinkMobile, NavbarLinks } from "@/Data/Navbar/NavbarLinks";
import { FaCloudDownloadAlt } from "react-icons/fa";


export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("");

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#D0B8A8] shadow-md">
                <div className="container mx-auto px-4 py-5 flex justify-between items-center ">

                    {/* Logo */}
                    <Link href="#" className="font-bold text-xl text-[#3C2A21] flex items-center gap-1">
                        ENG/Angie Mohamed Ali <BiCode size={25} />
                    </Link>

                    {/* Button (Mobile) */}
                    <button
                        onClick={() => setOpen(true)}
                        className="bg-transparent px-3 py-2 rounded md:hidden text-[#3C2A21] ">
                        <TiThMenu size={25} />
                    </button>

                    {/* Links (Desktop) */}
                    <div className="hidden md:flex md:items-center gap-6 font-bold text-[#3C2A21]">
                        {NavbarLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={activeLink === link.name ? "text-[#F6FFDC] border-b-3 border-[#F6FFDC] rounded-md" : ""}
                                onClick={() => setActiveLink(link.name)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        {/* Download CV */}
                        <a
                            href="/CV.Eng-Angie-Frontend.pdf"
                            download
                            className="flex items-center gap-1"
                        >
                           Download CV <FaCloudDownloadAlt size={22} />

                        </a>
                    </div>
                </div>
            </nav>

            {/* Overlay */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40"
                    onClick={() => setOpen(false)}
                />
            )}

            {/* Side Menu (Mobile) */}
            <div
                className={`fixed top-0 right-0 h-full w-[300px] bg-[#D0B8A8]
                     z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* Close Button */}
                <div className="p-4 flex justify-end">
                    <button
                        onClick={() => setOpen(false)}
                        className="bg-transparent text-[#3C2A21] p-2 ">
                        <RiCloseCircleFill size={25} />
                    </button>
                </div>

                {/* Links */}
                <ul className="flex flex-col items-center gap-5 mt-6">
                    {NavbarLinkMobile.map((item, i) => (
                        <li
                            key={i}
                            className="bg-[#F6FFDC] text-[#3C2A21] rounded-2xl w-[250px] text-center py-2 font-bold
                             hover:bg-[#FFF8EC] transition-colors duration-500"
                        >
                            <Link href={item.href} onClick={() => setOpen(false)}>
                                {item.name}
                            </Link>
                        </li>
                    ))}
                    <a
                        href="/cv.pdf"
                        download
                        className="flex items-center justify-center gap-1 bg-[#F6FFDC] text-[#3C2A21] rounded-2xl w-[250px] text-center py-2 font-bold
                             hover:bg-[#FFF8EC] transition-colors duration-500"
                    >
                       Download CV <FaCloudDownloadAlt size={22} />

                    </a>
                </ul>
            </div>
        </>
    );
}