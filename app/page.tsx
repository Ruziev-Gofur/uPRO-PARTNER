"use client";

import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  Menu,
  Phone,
  Send,
  ShieldCheck,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import ContactForm from "./contact-form";

const services = [
  {
    icon: Truck,
    title: "Car hauling dispatch service 24/7",
    text: "Round-the-clock dispatch support for car hauling carriers, owner-operators, and fleet teams.",
  },
  {
    icon: Users,
    title: "Car hauling recruiting",
    text: "Recruiting support focused on connecting reliable drivers and carriers with the right hauling opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Car hauling brokerage",
    text: "Brokerage coordination for vehicle transport needs with clear communication from pickup to delivery.",
  },
  {
    icon: CheckCircle2,
    title: "Car hauling driver referral network system",
    text: "A referral-driven network designed to help carriers and drivers find trusted car hauling connections.",
  },
];

const navItems = [
  ["Home", "#home"],
  ["About Us", "#about"],
  ["Services", "#services"],
  ["Contact Us", "/contact"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms-and-conditions"],
  ["SMS Terms & Conditions", "/sms-terms-and-conditions"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="site">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="uPro Group home">
          <span className="brand-mark">uPro</span>
          <span>
            <strong className="copy-strong">uPro Group</strong>
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

      <section id="home" className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Car hauling support for modern carriers</span>
          <h1 className="copy-strong">uPro Group</h1>
          <p>
            TMD Logistics LLC provides dispatch, recruiting, brokerage, and referral network support for car hauling
            businesses that need dependable communication every day of the week.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="/contact">
              Contact Us <ArrowRight size={18} />
            </a>
            <a className="secondary-button" href="#services">
              View Services
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Service snapshot">
          <div className="panel-heading">
            <span>Live operations</span>
            <strong>24/7</strong>
          </div>
          <div className="route-card">
            <div>
              <small>Primary focus</small>
              <b>Car hauling</b>
            </div>
            <Truck />
          </div>
          <ul>
            <li>
              <CheckCircle2 size={18} /> Dispatch service around the clock
            </li>
            <li>
              <CheckCircle2 size={18} /> Recruiting and referral coordination
            </li>
            <li>
              <CheckCircle2 size={18} /> Brokerage support for vehicle transport
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="section about">
        <div>
          <span className="eyebrow">About Us</span>
          <h2 className="copy-strong">Built for carriers, drivers, and vehicle transport teams.</h2>
        </div>
        <p>
          <strong className="copy-strong">uPro Group</strong> is the brand name of TMD Logistics LLC. We help car hauling professionals stay organized,
          connected, and responsive through practical operations support and clear customer communication.
        </p>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <span className="eyebrow">Services</span>
          <h2 className="copy-strong">Focused car hauling services</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" key={service.title}>
                <Icon size={30} />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section promise">
        <div>
          <Clock3 size={28} />
          <h2 className="copy-strong">Fast communication, clear expectations, and support when your business is moving.</h2>
        </div>
        <p>
          Whether you need dispatch coverage, driver recruiting help, brokerage support, or a referral network for car
          hauling professionals, our team is ready to connect.
        </p>
      </section>

      <section id="contact" className="section contact">
        <div className="contact-copy">
          <span className="eyebrow">Contact Us</span>
          <h2 className="copy-strong">Start a conversation with uPro Group.</h2>
          <p>
            Reach TMD Logistics LLC by phone or email, or send the form and our team will respond as soon as possible.
          </p>
          <div className="contact-lines">
            <a href="tel:+13123731282">
              <Phone size={18} /> (312) 373-1282
            </a>
            <a href="mailto:info@uprologistics.com">
              <Mail size={18} /> info@uprologistics.com
            </a>
            <a href="https://t.me/upro_manager" target="_blank" rel="noopener noreferrer">
              <Send size={18} /> Telegram Business
            </a>
          </div>
        </div>

        <ContactForm />
      </section>

      <footer className="footer">
        <div>
          <strong className="copy-strong">uPro Group</strong>
          <span>Legal name: TMD Logistics LLC</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms & Conditions</a>
          <a href="/sms-terms-and-conditions">SMS Terms & Conditions</a>
        </nav>
      </footer>
    </main>
  );
}
