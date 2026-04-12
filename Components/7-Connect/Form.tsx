import React from "react";
import Hero from "../3-Hero/Hero";
import { fields } from "@/Data/ConnectData/Connect";


const Form = () => {

  return (
    <div>
      <div className="w-full bg-white/40 backdrop-blur-md rounded-3xl shadow-md p-8 border border-[#D2C4B4]">
        
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {fields.map((field, index) =>
            field.as === "input" ? (
              <input
                key={index}
                type={field.type}
                placeholder={field.placeholder}
                className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
              />
            ) : (
              <textarea
                key={index}
                placeholder={field.placeholder}
                rows={field.rows}
                className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
              />
            )
          )}

          <button className="bg-[#A79277] text-white py-3 rounded-xl font-bold hover:bg-[#A79277]/80 transition">
            Send Message
          </button>
        </div>

        {/* Divider */}
        <div className="mt-6 text-center text-[#A79277] font-bold">OR</div>

        {/* Social */}
        <div className="flex items-center justify-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Form;