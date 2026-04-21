 "use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logo.svg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Get Quote", href: "#" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-30 w-full px-4 py-5 sm:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <nav className="flex items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 shadow-[0_12px_38px_rgba(8,14,40,0.25)] backdrop-blur-xl sm:px-5">
          <Link href="#" className="flex items-center gap-2.5">
            <Image src={logo} alt="Provixo logo" priority className="h-8 w-auto" />
          </Link>

          <ul className="hidden items-center gap-1.5 px-1 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center rounded-full px-4 py-2 text-sm font-medium text-white/80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/12 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="hidden rounded-full bg-[linear-gradient(180deg,#4f7bff_0%,#3556f2_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(58,98,255,0.42)] transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
            >
              Start Project
            </Link>

            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:bg-white/20 md:hidden"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <span className="text-lg leading-none">{isMenuOpen ? "X" : "≡"}</span>
            </button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="mt-3 rounded-2xl border border-white/15 bg-[#081131]/90 p-3 backdrop-blur-xl md:hidden">
            <ul className="space-y-1">
              {navItems.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-white/10 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#"
              className="mt-3 inline-flex w-full items-center justify-center rounded-xl bg-[linear-gradient(180deg,#4f7bff_0%,#3556f2_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(58,98,255,0.42)]"
              onClick={() => setIsMenuOpen(false)}
            >
              Start Project
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
