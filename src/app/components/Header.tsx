"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#expertise", label: "Expertise" },
  { href: "#whyme", label: "Why Me" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-shadow ${
        scrolled ? "shadow-md" : "shadow"
      } bg-white/80 backdrop-blur border-b border-gray-100`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="font-bold text-xl text-blue-700 tracking-tight">Trevor Spear</div>
        <ul className="flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative transition-colors text-gray-800 hover:text-blue-700 after:content-[''] after:block after:h-0.5 after:bg-blue-700 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left after:mt-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
} 