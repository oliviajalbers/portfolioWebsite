"use client"; // must use client for interactive components

import Link from "next/link";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 w-full">
      <div className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-xl font-bold">Olivia Albers</h1>
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="#experience" onClick={() => scrollToSection("experience")}>Experience</Link>
          <Link href="#education" onClick={() => scrollToSection("education")}>Education</Link>
          <Link href="#projects" onClick={() => scrollToSection("projects")}>Projects</Link>
          <Link href="#certifications" onClick={() => scrollToSection("certifications")}>Certifications</Link>
          <Link href="#skills" onClick={() => scrollToSection("skills")}>Skills</Link>
        </div>
      </div>
    </nav>
  );
}