"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { fields } from "@/Data/ConnectData/Connect";
import { toast } from "react-hot-toast";

const Form = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    try {
      await emailjs.sendForm(
        "service_0fee8ne",
        "template_sboujkh",
        formRef.current,
        "5AqI2owBuOMA4syhG"
      );

      toast.success("Thank you for your message!  Your message has been sent successfully.");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="w-full bg-white/40 backdrop-blur-md rounded-3xl shadow-md p-8 border border-[#D2C4B4]"
      >
        {/* Inputs */}
        <div className="flex flex-col gap-4">
          {fields.map((field, index) =>
            field.as === "input" ? (
              <input
                required
                key={index}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
              />
            ) : (
              <textarea
                required
                key={index}
                name={field.name}
                placeholder={field.placeholder}
                rows={field.rows}
                className="p-3 rounded-xl border border-[#D2C4B4] focus:outline-none focus:ring-2 focus:ring-[#A79277]"
              />
            )
          )}

          <button
            type="submit"
            className="bg-[#A79277] text-white py-3 rounded-xl font-bold hover:bg-[#A79277]/80 transition"
          >
            Send Message
          </button>
        </div>

      </form>
    </div>
  );
};

export default Form;