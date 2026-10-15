"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import CustomLink from "./CustomLink";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileLinks = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Education", "#education"],
  ];

  return <header className="w-full sticky top-0 left-0 z-50 pb-1 pt-2 border-b border-gray-100 bg-white/60 backdrop-blur-2xl">
    {/* Mobile Menu */}
    <nav className="container  flex items-center justify-between gap-8.5 lg:hidden">
      <Link href="/">
        <Image src="/images/logo-icon.svg" alt="logo" width={47} height={47} className="w-full h-full object-cover" />
      </Link>
      <button type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)} className="flex size-11 items-center justify-center border border-neutral-900 bg-white shadow-[3px_3px_0_0] transition-transform hover:translate-x-0.5 hover:translate-y-0.5">
        {menuOpen ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
      </button>
    </nav>
    {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="container grid gap-1 pb-4 pt-3 lg:hidden">
      {mobileLinks.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="border-b border-neutral-200 py-3 text-sm font-semibold uppercase">{label}</Link>)}
      <Link href="mailto:tazimansari1611@gmail.com" onClick={() => setMenuOpen(false)} className="mt-2 w-fit border border-neutral-900 px-4 py-2 text-sm font-semibold uppercase">Contact</Link>
    </nav>}
    {/* LG Menu */}
    <nav className="container lg:flex items-center justify-center gap-8.5 hidden">
      <CustomLink href="#about" label="About" className="uppercase font-semibold" />
      <CustomLink href="#skills" label="Skills" className="uppercase font-semibold" />
      <CustomLink href="#experience" label="Experience" className="uppercase font-semibold" />
      {/* logo   */}
      <Link href="/">
        <Image src="/images/logo-icon.svg" alt="logo" width={47} height={47} className="w-full h-full object-cover" />
      </Link>

      <CustomLink href="#projects" label="Projects" className="uppercase font-semibold" />
      <CustomLink href="#education" label="Education" className="uppercase font-semibold" />
    </nav>
  </header>;
}
