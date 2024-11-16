import React from 'react';
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Header from '@/components/layout/nav/header';
import Skills from '@/components/sections/skills';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div id="home">
        <Header />
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </main>
  );
}