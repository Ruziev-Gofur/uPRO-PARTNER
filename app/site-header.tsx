"use client";

import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./theme-toggle";

const navItems = [
  ["Home", "/#home"],
  ["About Us", "/#about"],
  ["Services", "/#services"],
  ["Contact Us", "/contact"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["SMS Terms & Conditions", "/sms-terms-and-conditions"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="/#home" aria-label="uPro Logistics home">
        <span className="brand-mark">uPro</span>
        <span>
          <strong className="copy-strong">uPro Logistics</strong>
          <small>TMD Logistics LLC</small>
        </span>
      </a>
      <nav className="nav-links" aria-label="Main navigation">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>
      <ThemeToggle />
      <a className="header-call" href="tel:+13123731282">
        <Phone size={17} />
        (312) 373-1282
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
