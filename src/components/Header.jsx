import { useEffect, useState } from "react";
import { NAV, PROFILE } from "../data/portfolio";

function ThemeToggle({ className = "" }) {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      className={`text-muted hover:text-paper transition-colors ${className}`}
    >
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      )}
    </button>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-ink/80 border-b border-hairline">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-serif text-lg tracking-tight text-paper">
          {PROFILE.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-sm text-muted hover:text-paper transition-colors">
              {n.label}
            </a>
          ))}
          <ThemeToggle />
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-sm px-4 py-2 rounded-full bg-blue text-ink font-medium hover:bg-paper transition-colors"
          >
            Say hello
          </a>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button className="text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-hairline px-5 sm:px-6 py-4 flex flex-col gap-4">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="text-sm text-muted">
              {n.label}
            </a>
          ))}
          <a href={`mailto:${PROFILE.email}`} className="text-sm text-blue">
            {PROFILE.email}
          </a>
        </div>
      )}
    </header>
  );
}
