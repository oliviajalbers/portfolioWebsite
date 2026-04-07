"use client"; 

import { useState } from "react";
import Link from "next/link";

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-200 w-full">
      <div className="flex justify-between items-center p-6 max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold">OA</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="#experience" onClick={() => scrollToSection("experience")}>Experience</Link>
          <Link href="#education" onClick={() => scrollToSection("education")}>Education</Link>
          <Link href="#projects" onClick={() => scrollToSection("projects")}>Projects</Link>
          <Link href="#certifications" onClick={() => scrollToSection("certifications")}>Certifications</Link>
          <Link href="#skills" onClick={() => scrollToSection("skills")}>Skills</Link>
        </div>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>
      
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4">
          <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="#experience" onClick={() => {
            setMenuOpen(false);
            scrollToSection("experience");
          }}>Experience</Link>
          <Link href="#education" onClick={() => {
            setMenuOpen(false);
            scrollToSection("education");
          }}>Education</Link>
          <Link href="#projects" onClick={() => {
            setMenuOpen(false);
            scrollToSection("projects");
          }}>Projects</Link>
          <Link href="#certifications" onClick={() => {
            setMenuOpen(false);
            scrollToSection("certifications");
          }}>Certifications</Link>
          <Link href="#skills" onClick={() => {
            setMenuOpen(false);
            scrollToSection("skills");
          }}>Skills</Link>
        </div>
      )}


    </nav>
  );
}