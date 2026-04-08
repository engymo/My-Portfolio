import React from 'react'
import { IoLogoLinkedin } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";

const Hero = () => {
    return (
        <>
            <div className="flex gap-4 mt-5 text-2xl items-center">

                <a href="https://www.linkedin.com" target="_blank" className="text-[#A79277] hover:text-blue-950">
                    <IoLogoLinkedin size={28} /></a>
                <a href="https://github.com/engymo" target="_blank" className="text-[#A79277] hover:text-black">
                    <BsGithub /></a>
                <a href="https://facebook.com" target="_blank" className="text-[#A79277] hover:text-blue-900">
                    <FaFacebookSquare /></a>
                <a href="https://wa.me/201098259164" target="_blank" className="text-[#A79277] hover:text-green-600">
                    <IoLogoWhatsapp /></a>
                <a href="https://mail.google.com" target="_blank" className="text-[#A79277] hover:text-red-800">
                    <SiGmail /></a>

            </div>
        </>
    )
}

export default Hero
