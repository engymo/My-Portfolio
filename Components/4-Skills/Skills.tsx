import React from 'react'

const imgs = [
    { id: 1, src: "/HTML5.webp", alt: "HTML" },
    { id: 2, src: "/Css.webp", alt: "CSS" },
    { id: 3, src: "/JS.webp", alt: "JavaScript" },
    { id: 4, src: "/Bootstrap.webp", alt: "Bootstrap" },
    { id: 5, src: "/TailwindCSS.webp", alt: "Tailwind CSS" },
    { id: 6, src: "/Reactjs.webp", alt: "React" },
    { id: 7, src: "/Typescript.webp", alt: "TypeScript" },
    { id: 8, src: "/Nextjs.webp", alt: "Next.js" },
]

const Skills = () => {
    return (
        <section className='mb-5 container mx-auto px-4 'id='skills'>
            <h2 className="text-4xl text-center font-bold mb-5 text-[#603F26]">Skills</h2>

            <div className="grid grid-cols-5 md:grid-cols-4 lg:grid-cols-8 gap-5 place-items-center">
                {imgs.map((img) => (
                    <div
                        key={img.id}
                        className="relative w-24 h-24 md:w-28 md:h-28 flex items-center justify-center rounded-full overflow-hidden group shadow-xl"
                    >
                        <div className="absolute inset-[-100%] 
                        bg-[conic-gradient(from_0deg,transparent_0deg,transparent_300deg,#D0B8A8_360deg)] 
                        animate-[spin_4s_linear_infinite]"></div>

                        <div className="absolute inset-[-100%] 
                        bg-[conic-gradient(from_180deg,transparent_0deg,transparent_300deg,#D0B8A8_360deg)] 
                        animate-[spin_4s_linear_infinite]"></div>

                        <div className="absolute inset-[4px] bg-white rounded-full z-10 flex items-center justify-center overflow-hidden ">
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-[70%] h-[70%] object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills