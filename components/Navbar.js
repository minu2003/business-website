import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/logo.svg";

const navItems = [
  { label: "Home", href: "#" },
  { label: "Solutions", href: "#" },
  { label: "Work", href: "#" },
  { label: "Insights", href: "#" },
  { label: "About", href: "#" },
];

export default function Navbar() {
  return (
    <header className="relative z-10 w-full px-4 py-5 sm:px-8">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 shadow-[0_12px_38px_rgba(8,14,40,0.25)] backdrop-blur-xl sm:px-5">
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

        <Link
          href="#"
          className="rounded-full bg-[linear-gradient(180deg,#4f7bff_0%,#3556f2_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(58,98,255,0.42)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          Start Project
        </Link>
      </nav>
    </header>
  );
}
