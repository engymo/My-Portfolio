import React from 'react'
import Hero from '../3-Hero/Hero'
import ButtonSec from '../2-Header/ButtonSec'
import Link from 'next/link'
import { BiCode } from "react-icons/bi";
import { FaCloudDownloadAlt } from "react-icons/fa";

function Footer() {
    return (
        <>
            <div className="bg-[#D0B8A8]">
                <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

                    {/* Section 1 */}
                    <div className="text-sm text-[#3c2A21] gap-3">
                        <Link href="#" className="font-bold text-lg flex items-center gap-1">
                            ENG/Angie Mohamed Ali <BiCode size={25} />
                        </Link>

                        <p className="leading-relaxed">
                            Frontend Developer passionate about building modern, responsive, and user-friendly web applications.
                            I specialize in transforming creative designs into clean, efficient, and scalable code using React, Next.js, TypeScript and Tailwind CSS.
                            I enjoy crafting seamless user experiences with attention to detail, performance, and accessibility.
                        </p>
                    </div>

                    {/* Section 2 */}
                    < div className='lg:mx-auto items-start flex lg:flex-col flex-row lg:items-center gap-3 text-[#3c2A21]'>
                        <p className='font-bold text-[#3c2A21]'>Download My CV</p>
                        <a href="/CV.Eng-Angie-Frontend.pdf" download className="text-[#3c2A21] font-bold hover:text-[#603F26]/80 transition ">
                            <FaCloudDownloadAlt size={22} />
                        </a>
                    </div >

                    {/* Section 3 */}
                    <div className="text-[#3c2A21] lg:mx-auto mx-0 lg:text-center text-left">
                        <h6 className="text-lg font-bold">Connect Me</h6>
                        <Hero />
                    </div>

                </div>

                {/* Bottom */}
                <div className="text-center py-4 text-sm font-bold text-[#3c2A21] border-t border-[#3c2A21]/20">
                    &copy; All Copyright by : Eng / Angie Muhammad Ali
                </div>
            </div>

        </>
    )
}

export default Footer
