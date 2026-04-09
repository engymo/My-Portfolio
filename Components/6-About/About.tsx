import React from 'react'
import { CardWork } from '@/Data/AboutData/AboutData';


const About = () => {
    return (
        <>
            <section id="about" className=" container mx-auto px-4">

                <h2 className="text-center mb-5 text-[#603F26] my-[5%] lg:my-[10%] font-bold text-4xl">What I Do</h2>
                {CardWork.map((work, index) => (
                    <div
                        className="mb-5 shadow-lg max-w-xl bg-[#9F8383] hover:shadow-sm rounded-xl p-5"
                        style={{
                            marginLeft: index % 2 === 0 ? "auto" : "0",
                            marginRight: index % 2 !== 0 ? "auto" : "0",
                        }}
                        key={work.id}
                    >
                        <div className="flex items-center gap-2">
                            <img src={work.image} className=" rounded-lg w-[20%] h-[20%]" alt={work.title} />
                            <div>
                                <h5 className="text-white font-bold">{work.title}</h5>
                                <p className="text-sm text-white/70">{work.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}

export default About
