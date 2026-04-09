import React from 'react'
import { imgs } from '@/Data/SkillsData/SkillsData'


const Skills = () => {
    return (

        <section className='container mx-auto px-4 ' id='skills'>
            <h2 className="text-4xl text-center font-bold text-[#603F26] my-[7%] lg:my-0 lg:mb-[5%]">Skills</h2>
            <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-8 gap-5 place-items-center">
                {imgs.map((img) => (
                    <div
                        key={img.id}
                        className="relative w-24 h-24 md:w-28 md:h-28 flex items-center 
                        justify-center rounded-full overflow-hidden group shadow-xl mb-5 lg:mb-0"
                    >
                        {/* Spinner */}
                        <div className="absolute inset-[-100%] 
                        bg-[conic-gradient(from_200deg,transparent_180deg,transparent_300deg,#A79277_360deg)] 
                        animate-[spin_3s_linear_infinite]"></div>


                        <div className="absolute inset-[1px] bg-white rounded-full z-10 flex items-center justify-center overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-[80%] h-[80%] object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills