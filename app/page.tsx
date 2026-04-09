import React from "react";
import Header from "@/Components/2-Header/Header";
import Skills from "@/Components/4-Skills/Skills";
import About from "@/Components/6-About/About";
import Works from "@/Components/5-Works/Works";
import Contact from "@/Components/7-Contact/Contact";


export default function Home() {
  return (
    <div>
      <main className="" >
        <Header />
        <Skills />
        <About />
        <Works />
        <Contact/>
      </main>
    </div>
  );
}
