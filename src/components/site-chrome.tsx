import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/expertise", label: "Expertise" },
  { to: "/speaking", label: "Speaking" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container-prose flex items-center justify-between h-16">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-serif text-xl text-primary">Siddhesh Meher</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.2em] text-muted-foreground">CEO · Indmark Group</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm tracking-wide transition-colors ${pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-primary"}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="text-sm px-4 py-2 bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition">
            Book a Talk
          </Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-prose py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="text-sm py-2 text-foreground">{l.label}</Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="container-prose py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="font-serif text-lg text-primary">Siddhesh Meher</div>
          <p className="text-sm text-muted-foreground mt-2 max-w-xs">CEO, Indmark Group Engineering. Second-generation entrepreneur, speaker & family business strategist.</p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Navigate</div>
          <ul className="space-y-2 text-sm">
            {links.map(l => <li key={l.to}><Link to={l.to} className="hover:text-gold transition">{l.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">Contact</div>
          <p className="text-sm">M: <a href="tel:+919922920050" className="hover:text-gold">+91 99229 20050</a></p>
          <p className="text-sm mt-1 text-muted-foreground">Indmark Group Engineering</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-prose py-4 text-xs text-muted-foreground flex justify-between">
          <span>© {new Date().getFullYear()} Siddhesh Meher. All rights reserved.</span>
          <span className="font-serif italic">Legacy. Leadership. Evolution.</span>
        </div>
      </div>
    </footer>
  );
}
