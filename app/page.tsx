"use client";

import { ArrowUpRight, Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const services = [
  { id: "01", icon: "◫", title: "Full Truckload", text: "A dedicated vehicle for your cargo. Fast, secure delivery with no unnecessary stops along the way." },
  { id: "02", icon: "⌁", title: "International Logistics", text: "Multimodal transportation and customs management across the CIS, Europe, and Asia." },
  { id: "03", icon: "❄", title: "Temperature Control", text: "Uninterrupted cold-chain logistics and real-time monitoring for food and pharmaceutical cargo." },
  { id: "04", icon: "▤", title: "Warehousing", text: "Receiving, storage, order fulfillment, and destination-based distribution in one connected system." },
];

const steps = [
  ["01", "Send a Request", "Tell us the cargo type, volume, and destination."],
  ["02", "We Build the Plan", "We select the most efficient route and vehicle."],
  ["03", "We Hit the Road", "We track your cargo 24/7 and deliver it safely."],
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell">
      <div className="noise" />
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a className="brand" href="#home" aria-label="uPro Partner home page">
          <span className="brand-mark"><span>➜</span></span>
          <span><b>uPRO PARTNER</b><small>LOGISTICS</small></span>
        </a>
        <nav className="nav-links">
          <a href="#home">Home</a><a href="#services">Services</a>
          <a href="#about">About Us</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Get a Quote <ArrowUpRight size={17}/></a>
        <button className="menu-button" onClick={() => setMenu(!menu)} aria-label="Open menu">{menu ? <X/> : <Menu/>}</button>
        {menu && <div className="mobile-menu">{["home","services","about","contact"].map((id, i) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{["Home","Services","About Us","Contact"][i]}</a>)}</div>}
      </header>

      <section id="home" className="hero">
        <div className="hero-grid" />
        <div className="orb orb-one" /><div className="orb orb-two" />
        <div className="hero-copy">
          <div className="eyebrow reveal-up"><span className="pulse" /> Nationwide coverage · 24/7 service</div>
          <h1 className="reveal-up delay-1">YOUR CARGO.<br/><span>OUR PROMISE.</span><br/>DELIVERED.</h1>
          <p className="hero-text reveal-up delay-2">We deliver domestic and international cargo on time through smart logistics, a modern fleet, and continuous tracking.</p>
          <div className="hero-actions reveal-up delay-3">
            <a className="primary-button" href="#contact">Get a Free Quote <ArrowUpRight/></a>
            <a className="text-link" href="#services">Explore Services <span>↓</span></a>
          </div>
          <div className="trust-row reveal-up delay-3">
            <span>✓ Insured cargo</span><span>✓ GPS tracking</span><span>✓ Transparent pricing</span>
          </div>
        </div>

        <div className="tracking-card reveal-card">
          <div className="card-head"><div><small>SHIPMENT STATUS</small><strong>NL — 08427</strong></div><span className="status"><i/> IN TRANSIT</span></div>
          <div className="route-box">
            <div><b>NY</b><small>New York</small></div>
            <div className="route-line"><span className="truck" role="img" aria-label="Delivery van">🚚</span></div>
            <div className="route-end"><b>CA</b><small>California</small></div>
          </div>
          <div className="progress-title"><span>Delivery progress</span><b>72%</b></div>
          <div className="progress"><i/></div>
          <div className="shipment-meta">
            <div><small>CARGO TYPE</small><b>Industrial equipment</b></div>
            <div><small>WEIGHT</small><b>18,500 kg</b></div>
            <div><small>EST. ARRIVAL</small><b>July 12, 2026</b></div>
            <div><small>STATUS</small><b className="cyan">On schedule</b></div>
          </div>
          <button>Track Shipment <span>→</span></button>
        </div>
        <div className="scroll-hint"><span/> SCROLL</div>
      </section>

      <section className="stats">
        {[["12+","Years of experience"],["2,400+","Loads delivered"],["18","Countries"],["98.7%","On-time delivery"]].map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
      </section>

      <section id="services" className="section services">
        <div className="section-heading">
          <div><span className="kicker">01 · SERVICES</span><h2>Precision solutions<br/><em>for every load.</em></h2></div>
          <p>From simple shipments to complex international supply chains — complete logistics services tailored to your business.</p>
        </div>
        <div className="service-grid">
          {services.map((s) => <article key={s.id} className="service-card">
            <div className="service-top"><span>{s.id}</span><i>{s.icon}</i></div>
            <h3>{s.title}</h3><p>{s.text}</p>
            <a href="#contact">Learn More <ArrowUpRight size={18}/></a>
          </article>)}
        </div>
      </section>

      <section id="about" className="about section">
        <div className="map-visual">
          <div className="map-grid"/>
          <div className="map-label label-tas"><i/> NEW YORK</div>
          <div className="map-label label-ist"><i/> CALIFORNIA</div>
          <div className="map-label label-alm"><i/> TEXAS</div>
          <svg viewBox="0 0 700 460" aria-hidden="true">
            <path className="map-path base" d="M150,290 C250,120 400,110 570,190"/>
            <path className="map-path moving" d="M150,290 C250,120 400,110 570,190"/>
            <path className="map-path base" d="M150,290 C270,380 410,360 500,325"/>
          </svg>
          <div className="plane">➤</div>
          <div className="map-chip"><small>ACTIVE ROUTES</small><b>27</b><span>On the road today</span></div>
        </div>
        <div className="about-copy">
          <span className="kicker">02 · ABOUT US</span>
          <h2>Connecting more<br/>than roads —<br/><em>opportunities.</em></h2>
          <p>uPro Partner is a team that sees transportation not as a simple service, but as an essential part of your growth. Precision, responsibility, and honest communication at every mile.</p>
          <div className="feature-list">
            <div><span>01</span><b>Dedicated Logistics Expert</b><small>One point of contact, always by your side.</small></div>
            <div><span>02</span><b>Real-Time Visibility</b><small>Always know exactly where your cargo is.</small></div>
            <div><span>03</span><b>Guaranteed Security</b><small>Every shipment is fully insured.</small></div>
          </div>
        </div>
      </section>

      <section className="process section">
        <div className="section-heading compact"><div><span className="kicker">03 · PROCESS</span><h2>Simple. Fast. <em>Reliable.</em></h2></div></div>
        <div className="steps">{steps.map(([n,t,d],i) => <div className="step" key={n}><span>{n}</span><div className="step-icon">{i===0?"✦":i===1?"⌁":"➜"}</div><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-glow"/>
        <span className="kicker">HAVE A SHIPMENT?</span>
        <h2>Your next destination —<br/><em>success.</em></h2>
        <p>Tell us your route and we will find the best solution.</p>
        <div className="contact-actions">
          <a className="primary-button light" href="tel:+998901234567"><Phone/> +998 90 123 45 67</a>
          <a className="mail-link" href="mailto:info@upro-partner.com"><Mail/> info@upro-partner.com</a>
        </div>
      </section>

      <footer>
        <a className="brand" href="#home"><span className="brand-mark"><span>➜</span></span><span><b>uPRO PARTNER</b><small>LOGISTICS</small></span></a>
        <p>Your cargo is our responsibility.</p>
        <div><a href="#services">Services</a><a href="#about">Company</a><a href="#contact">Contact</a></div>
        <small>© 2026 uPro Partner. All rights reserved.</small>
      </footer>
    </main>
  );
}
