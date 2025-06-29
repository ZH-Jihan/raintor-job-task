"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        menuRef.current &&
        !(menuRef.current as HTMLDivElement).contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClick);
    } else {
      document.removeEventListener("mousedown", handleClick);
    }
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  return (
    <nav className="w-full relative bg-white z-50" style={{ minHeight: 60 }}>
      {/* Gradient left background for logo */}
      <div className="absolute left-0 top-0 h-full w-48 bg-gradient-to-br from-lime-100 to-transparent pointer-events-none z-0" />
      <div className="flex items-center justify-between w-full max-w-none px-4 sm:px-8 py-3 relative">
        {/* Logo */}
        <Link
          href="#home"
          className="font-extrabold text-xl sm:text-2xl tracking-tight leading-none select-none relative z-10"
          aria-label="Homepage"
          style={{
            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
            letterSpacing: "-0.04em",
          }}
        >
          <span className="text-black">DEVLOP.ME</span>
        </Link>
        {/* Desktop Nav links */}
        <ul
          className="hidden md:flex gap-8 sm:gap-12 items-center justify-center flex-1 z-10"
          role="menubar"
        >
          {navLinks.map((link) => (
            <li key={link.name} role="none">
              <Link
                href={link.href}
                className="text-black text-base font-normal hover:opacity-70 transition px-0 py-0"
                role="menuitem"
                tabIndex={0}
                style={{
                  fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                  letterSpacing: "-0.01em",
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* Desktop Start Project button */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-2 rounded-full border border-black bg-white text-black font-normal text-base hover:bg-black hover:text-white transition-all duration-200 ml-4 z-10"
          tabIndex={0}
          style={{
            fontFamily: "Poppins, Arial, Helvetica, sans-serif",
            height: 44,
          }}
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="inline align-middle"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v8M12 16l4-4-4-4" />
          </svg>
          Start Project
        </a>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 z-20 relative"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black mb-1 rounded transition-all duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black rounded transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Mobile menu dropdown */}
        {menuOpen && (
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-200 flex flex-col items-center py-4 z-30 animate-fade-in transition-all duration-200"
          >
            <ul className="flex flex-col gap-4 w-full items-center">
              {navLinks.map((link) => (
                <li key={link.name} className="w-full text-center">
                  <Link
                    href={link.href}
                    className="block text-black text-base font-normal py-2 w-full hover:bg-gray-100"
                    style={{
                      fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                      letterSpacing: "-0.01em",
                    }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-2 mt-4 rounded-full border border-black bg-white text-black font-normal text-base hover:bg-black hover:text-white transition-all duration-200"
              style={{
                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="inline align-middle"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 8v8M12 16l4-4-4-4" />
              </svg>
              Start Project
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
