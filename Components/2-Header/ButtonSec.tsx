import React from 'react'
import { ButtonsSectionData } from "@/Data/HeaderData/HeaderData";
import Link from 'next/link';

const ButtonSec = () => {
    return (
        <div>
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
        </div>
    )
}

export default ButtonSec
