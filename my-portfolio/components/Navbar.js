"use client"; // must use client for interactive components

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-6 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold">Olivia Albers</h1>
      <div className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}