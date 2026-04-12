import React from 'react'
import { CardWork } from '@/Data/AboutData/AboutData';



const About = () => {
    return (
        <>
            <section id="about" className=" container mx-auto px-4">

                <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center
             bg-contain w-full h-[100px] my-[7%] lg:my-0 lg:my-[5%] flex items-center justify-center'>
                    <h2 className="text-4xl text-center font-bold text-[#603F26] ">About</h2>
                </div>
                
                {CardWork.map((work, index) => (
                    <div
                        className="mb-5 shadow-lg max-w-xl bg-white/40 backdrop-blur-md hover:shadow-sm rounded-xl p-5"
                        style={{
                            marginLeft: index % 2 === 0 ? "auto" : "0",
                            marginRight: index % 2 !== 0 ? "auto" : "0",
                        }}
                        key={work.id}
                    >
                        <div className="flex items-center gap-2">
                            <img src={work.image} className=" rounded-lg w-[20%] h-[20%]" alt={work.title} />
                            <div>
                                <h5 className="text-[#603F26] font-bold">{work.title}</h5>
                                <p className="text-sm text-[#603F26]/70">{work.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default About
