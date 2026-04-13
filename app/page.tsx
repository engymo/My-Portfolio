import React from "react";
import Header from "@/Components/2-Header/Header";
import Skills from "@/Components/4-Skills/Skills";
import About from "@/Components/6-About/About";
import Works from "@/Components/5-Works/Works";
import Connect from "@/Components/7-Connect/Connect";


export default function Home() {
  return (
    <div>
      <main >
        <Header />
        <Skills />
        <About />
        <Works />
        <Connect/>
      </main>
    </div>
  );
}
