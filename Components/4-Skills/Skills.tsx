import React from 'react'
import { imgs } from '@/Data/SkillsData/SkillsData'


const Skills = () => {

    return (

        <section className='container mx-auto px-4 ' id='skills'>
            <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center
             bg-contain w-full h-[100px] my-[10%] lg:my-[5%]  flex items-center justify-center'>
                <h2 className="text-4xl text-center font-bold text-[#603F26] ">Skills</h2>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-8 gap-3 place-items-center">
                {imgs.map((img) => (
                    <div
                        key={img.id}
                        className="relative w-24 h-24 md:w-28 md:h-28 flex items-center 
                        justify-center rounded-full overflow-hidden group shadow-xl hover:shadow-lg mb-5 lg:mb-0"
                    >
                        {/* Spinner */}
                        <div className="absolute inset-[-100%] 
                        bg-[conic-gradient(from_200deg,transparent_180deg_300deg,#FF4400_360deg)] 
                        animate-[spin_3s_linear_infinite]"></div>


                        <div className="absolute inset-[1px] bg-[#D2C4B4] rounded-full z-10 flex items-center justify-center overflow-hidden">
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