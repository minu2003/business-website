import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "About", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  { label: "Dribbble", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contact"
      className="relative z-10 mx-auto mt-10 w-full max-w-6xl px-6 pb-10 sm:px-8"
    >
      <div className="rounded-[2rem] border border-white/15 bg-[#040b22]/75 p-6 shadow-[0_25px_70px_rgba(2,6,25,0.55)] backdrop-blur-lg sm:p-8">
        <div className="grid gap-4 rounded-2xl border border-white/15 bg-[linear-gradient(120deg,rgba(79,123,255,0.16),rgba(124,58,237,0.12))] p-5 sm:grid-cols-[1fr_auto] sm:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Ready to start?
            </p>
            <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
              Let us build your next growth platform.
            </h3>
          </div>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0b1435] transition-transform duration-200 hover:-translate-y-0.5"
          >
            Schedule Call
          </Link>
        </div>

        <div className="mt-7 grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold">Provixo</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
              Digital products, AI workflows, and scalable engineering built for
              ambitious companies.
            </p>
            <p className="mt-4 text-sm text-white/70">
              hello@provixo.com
              <br />
              +1 (555) 302-9021
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 transition-colors hover:bg-white/15 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
              Navigation
            </p>
            <ul className="mt-3 space-y-2.5">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
              Legal
            </p>
            <ul className="mt-3 space-y-2.5">
              {legalLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-7 border-t border-white/15 pt-4 text-xs text-white/60 sm:flex sm:items-center sm:justify-between">
          <p>© {currentYear} Provixo. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Designed for modern brands.</p>
        </div>
      </div>
    </footer>
  );
}
