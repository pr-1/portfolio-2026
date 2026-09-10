import { useState } from "react";
import { NAV, PROFILE } from "../data/portfolio";

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
          <a
            href={`mailto:${PROFILE.email}`}
            className="text-sm px-4 py-2 rounded-full bg-blue text-ink font-medium hover:bg-paper transition-colors"
          >
            Say hello
          </a>
        </nav>

        <button className="md:hidden text-paper" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
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
