// @flow strict
"use client";

import Link from "next/link";
import { useState } from "react";
import { personalData } from "@/utils/data/personal-data";


function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/blog", label: "BLOGS" },
    { href: "/#projects", label: "PROJECTS" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="bg-transparent w-full">
      <div className="flex items-center justify-between py-5 gap-4">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className="text-[#16f2b3] text-2xl sm:text-3xl font-bold break-words">
            {personalData.name}
          </Link>
        </div>

        <button
          className="md:hidden text-white text-2xl leading-none p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "X" : "≡"}
        </button>

        <ul className="hidden md:flex md:flex-row md:items-center md:space-x-1" id="navbar-default">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href={item.href}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{item.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {menuOpen && (
        <ul className="md:hidden flex flex-col w-full pb-4 gap-2 border-t border-[#353951]">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                className="block px-2 py-2 no-underline outline-none hover:no-underline"
                href={item.href}
                onClick={closeMenu}
              >
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{item.label}</div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;