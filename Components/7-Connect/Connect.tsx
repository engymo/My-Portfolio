import React from "react";
import Hero from "../3-Hero/Hero";

const Connect = () => {
  return (
    <section
      id="Connect"
      className="container mx-auto px-4 mb-5 flex flex-col items-center justify-center"
    >
      {/* Title */}
      <div className='bg-[url(/TitleBG.webp)] bg-no-repeat bg-center bg-contain
     w-full h-[100px] my-[7%] flex items-center justify-center'>
        <h2 className="text-4xl text-center font-bold text-[#603F26] ">Connect
        </h2>
      </div>

      {/* Card */}
      <div className="w-full max-w-2xl bg-white/40 backdrop-blur-md rounded-3xl
       shadow-md p-8 border border-[#D2C4B4]">

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
          />

          <textarea
            placeholder="Your Message"
            rows={4}
            className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
          ></textarea>

          <button className="bg-[#A79277] text-white py-3 rounded-xl font-bold hover:bg-[#A79277]/80 transition">
            Send Message
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 text-center text-[#A79277] font-bold">
          OR
        </div>

        {/* Social */}
      <div className="flex items-center justify-center">
         <Hero/>
      </div>
      </div>
    </section>
  );
};

export default Connect;