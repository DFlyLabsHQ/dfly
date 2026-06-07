"use client";

import Image from "next/image";
import { JSX, useState, useEffect } from "react";
import { FiX, FiMenu, FiHome, FiBriefcase, FiBox, FiMail } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa6";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen text-white overflow-hidden relative" style={{ background: "#06010f" }}>

      {/* ================= NEBULA BACKGROUND ================= */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", inset: 0, background: "#06010f" }} />
        <div style={{ position: "absolute", top: "-180px", left: "-120px", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(109,40,217,0.10) 45%, transparent 70%)", filter: "blur(90px)" }} />
        <div style={{ position: "absolute", top: "-120px", right: "-120px", width: "850px", height: "850px", borderRadius: "50%", background: "radial-gradient(circle, rgba(147,51,234,0.20) 0%, rgba(126,34,206,0.10) 50%, transparent 72%)", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "-180px", left: "-80px", width: "650px", height: "450px", borderRadius: "50%", background: "radial-gradient(circle, rgba(109,40,217,0.16) 0%, rgba(109,40,217,0.07) 55%, transparent 75%)", filter: "blur(100px)", transform: "rotate(12deg)" }} />
        <div style={{ position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "1100px", height: "180px", borderRadius: "50%", background: "rgba(109,40,217,0.10)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "22%", left: "50%", transform: "translateX(-50%)", width: "550px", height: "350px", borderRadius: "50%", background: "rgba(109,40,217,0.10)", filter: "blur(110px)" }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.65, backgroundImage: `radial-gradient(circle at 15% 25%, rgba(255,255,255,.85) 1px, transparent 1px),radial-gradient(circle at 75% 18%, rgba(255,255,255,.55) 1px, transparent 1px),radial-gradient(circle at 48% 55%, rgba(255,255,255,.65) 1px, transparent 1px),radial-gradient(circle at 8% 75%, rgba(255,255,255,.35) 1px, transparent 1px),radial-gradient(circle at 88% 65%, rgba(255,255,255,.45) 1px, transparent 1px),radial-gradient(circle at 62% 8%, rgba(255,255,255,.75) 1px, transparent 1px),radial-gradient(circle at 35% 88%, rgba(255,255,255,.30) 1px, transparent 1px),radial-gradient(circle at 92% 40%, rgba(255,255,255,.40) 1px, transparent 1px),radial-gradient(circle at 5% 48%, rgba(255,255,255,.50) 1px, transparent 1px),radial-gradient(circle at 55% 32%, rgba(255,255,255,.28) 1px, transparent 1px),radial-gradient(circle at 25% 60%, rgba(255,255,255,.35) 1px, transparent 1px),radial-gradient(circle at 70% 80%, rgba(255,255,255,.28) 1px, transparent 1px),radial-gradient(circle at 40% 15%, rgba(255,255,255,.45) 1px, transparent 1px),radial-gradient(circle at 82% 35%, rgba(255,255,255,.32) 1px, transparent 1px),radial-gradient(circle at 18% 90%, rgba(255,255,255,.40) 1px, transparent 1px)` }} />
      </div>

      {/* ================= MOBILE SIDEBAR OVERLAY ================= */}
      <div
        onClick={closeMenu}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(0,0,0,0.55)",
          backdropFilter: "blur(4px)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
          transition: "opacity 0.35s ease",
        }}
      />

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside style={{
        position: "fixed", top: 0, right: 0, bottom: 0, zIndex: 50,
        width: "280px",
        background: "rgba(10,4,26,0.97)",
        borderLeft: "1px solid rgba(109,40,217,0.25)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        transition: "transform 0.38s cubic-bezier(0.4, 0, 0.2, 1)",
        display: "flex", flexDirection: "column",
        padding: "0",
        boxShadow: menuOpen ? "-8px 0 40px rgba(109,40,217,0.18)" : "none",
      }}>
        {/* Sidebar header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image src="/logo/dfly-logo.png" alt="DFly Labs" width={30} height={30} style={{ objectFit: "contain", filter: "drop-shadow(0 0 8px rgba(168,85,247,0.55))" }} />
            <span style={{ fontWeight: 700, fontSize: "15px", color: "#fff" }}>DFly Labs</span>
          </div>
          <button onClick={closeMenu} aria-label="Close menu" style={{ background: "rgba(109,40,217,0.12)", border: "1px solid rgba(109,40,217,0.25)", borderRadius: "8px", color: "#a78bfa", cursor: "pointer", width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}>
            <FiX size={18} />
          </button>
        </div>

        {/* Sidebar nav links */}
        <nav style={{ flex: 1, padding: "24px 16px", display: "flex", flexDirection: "column", gap: "4px" }}>
          {[
            { label: "Home", href: "#", Icon: FiHome },
            { label: "Services", href: "#services", Icon: FiBriefcase },
            { label: "Products", href: "#products", Icon: FiBox },
            { label: "Contact", href: "#contact", Icon: FiMail },
          ].map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              style={{
                display: "flex", alignItems: "center", gap: "12px",
                padding: "13px 16px", borderRadius: "10px",
                color: "rgba(255,255,255,0.65)", textDecoration: "none",
                fontSize: "15px", fontWeight: 500,
                border: "1px solid transparent",
                transition: "all 0.2s",
              }}
              onMouseOver={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "rgba(109,40,217,0.14)";
                el.style.color = "#a78bfa";
                el.style.borderColor = "rgba(109,40,217,0.25)";
              }}
              onMouseOut={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = "rgba(255,255,255,0.65)";
                el.style.borderColor = "transparent";
              }}
            >
              <Icon size={17} style={{ opacity: 0.8 }} />
              {label}
            </a>
          ))}
        </nav>

        {/* Sidebar footer CTA */}
        <div style={{ padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <a href="mailto:hello@dflylabs.com" onClick={closeMenu} style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
            padding: "12px 20px", borderRadius: "9999px",
            background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)",
            color: "#fff", textDecoration: "none", fontWeight: 600, fontSize: "14px",
            boxShadow: "0 0 20px rgba(109,40,217,0.35)",
          }}>
            <FiMail size={14} />
            Get in Touch
          </a>
        </div>
      </aside>

      {/* ================= NAVBAR ================= */}
      <header style={{ position: "relative", zIndex: 20, paddingTop: "16px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "space-between",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(255,255,255,0.03)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            padding: "10px 24px",
            boxShadow: "0 0 50px rgba(109,40,217,0.07), inset 0 1px 0 rgba(255,255,255,0.04)"
          }}>
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/logo/dfly-logo.png" alt="DFly Labs" width={36} height={36} style={{ objectFit: "contain", filter: "drop-shadow(0 0 10px rgba(168,85,247,0.55))" }} />
              <span style={{ fontWeight: 600, fontSize: "15px", letterSpacing: "0.03em", color: "#fff" }}>DFly Labs</span>
            </div>

            {/* Desktop Nav links */}
            <nav className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "36px", fontSize: "14px" }}>
              {[
                { label: "Home", active: true },
                { label: "Services" },
                { label: "Products" },
                { label: "Contact" },
              ].map(({ label, active }) => (
                <a key={label} href="#" style={{ color: active ? "#a78bfa" : "rgba(255,255,255,0.5)", textDecoration: "none", fontWeight: 500, transition: "color 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseOut={e => { if (!active) e.currentTarget.style.color = "rgba(255,255,255,0.5)"; }}>
                  {label}
                </a>
              ))}
            </nav>

            {/* Hamburger (mobile only) */}
            <button
              className="hamburger-btn"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              style={{
                display: "none",
                alignItems: "center", justifyContent: "center",
                width: 38, height: 38, borderRadius: "9px",
                background: "rgba(109,40,217,0.10)",
                border: "1px solid rgba(109,40,217,0.22)",
                color: "#a78bfa", cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              <FiMenu size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section style={{ position: "relative", zIndex: 10, minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center",
            borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.20)",
            background: "rgba(109,40,217,0.08)", backdropFilter: "blur(12px)",
            padding: "8px 22px", fontSize: "13px", color: "rgba(221,214,254,0.85)",
            marginBottom: "48px", letterSpacing: "0.05em"
          }}>
            Building Premium Digital Products
          </div>

          {/* Logo Hero */}
          <div style={{ position: "relative", display: "flex", justifyContent: "center", marginBottom: "52px" }}>
            <div style={{ position: "absolute", width: "280px", height: "280px", background: "rgba(109,40,217,0.28)", filter: "blur(90px)", borderRadius: "50%", top: "50%", left: "50%", transform: "translate(-50%,-50%)", zIndex: 0 }} />
            <Image src="/logo/dfly-logo.png" alt="DFly Labs Logo" width={200} height={200} style={{ position: "relative", zIndex: 1, objectFit: "contain", filter: "drop-shadow(0 0 38px rgba(168,85,247,0.50))" }} />
          </div>

          {/* Headline — FIX: use inline SVG gradient text via CSS filter instead of webkit clip */}
          <h1 style={{ fontSize: "clamp(42px, 7vw, 72px)", fontWeight: 800, lineHeight: 1.08, letterSpacing: "-0.02em", margin: 0, color: "#fff" }}>
            Engineering{" "}
            {/* FIX: Wrap gradient span in a block-level div with isolation to prevent highlight bleed */}
            <span style={{ display: "inline" }}>
              <span style={{
                background: "linear-gradient(135deg, #c084fc 0%, #d946ef 55%, #9333ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                // Isolation prevents the gradient from being overridden by selection/browser paint
                isolation: "isolate",
                display: "inline",
              }}>
                Powerful<br />Digital Experiences
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{ marginTop: "28px", maxWidth: "600px", margin: "28px auto 0", fontSize: "17px", color: "rgba(255,255,255,0.35)", lineHeight: 1.7 }}>
            DFly Labs blends creativity and scalable technology to craft modern websites, applications and SaaS platforms.
          </p>

          {/* CTAs */}
          <div style={{ marginTop: "48px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
            <button style={{ padding: "13px 32px", borderRadius: "9999px", border: "none", background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)", color: "#fff", fontWeight: 600, fontSize: "15px", cursor: "pointer", boxShadow: "0 0 24px rgba(109,40,217,0.40), 0 4px 16px rgba(109,40,217,0.25)", transition: "all 0.2s", letterSpacing: "0.01em" }}
              onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.boxShadow = "0 0 40px rgba(109,40,217,0.55), 0 4px 24px rgba(109,40,217,0.35)"; el.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.boxShadow = "0 0 24px rgba(109,40,217,0.40), 0 4px 16px rgba(109,40,217,0.25)"; el.style.transform = "translateY(0)"; }}>
              Get in Touch
            </button>
            <button style={{ padding: "13px 32px", borderRadius: "9999px", border: "1px solid rgba(167,139,250,0.25)", background: "rgba(109,40,217,0.06)", backdropFilter: "blur(12px)", color: "rgba(221,214,254,0.85)", fontWeight: 600, fontSize: "15px", cursor: "pointer", transition: "all 0.2s", letterSpacing: "0.01em" }}
              onMouseOver={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(109,40,217,0.14)"; el.style.borderColor = "rgba(167,139,250,0.40)"; }}
              onMouseOut={e => { const el = e.currentTarget as HTMLButtonElement; el.style.background = "rgba(109,40,217,0.06)"; el.style.borderColor = "rgba(167,139,250,0.25)"; }}>
              Our Services
            </button>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section style={{ position: "relative", zIndex: 10, padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "48px", color: "#fff" }}>
            What We Build
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
            {services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(255,255,255,0.05)", padding: "40px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px", marginBottom: "28px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Image src="/logo/dfly-logo.png" alt="DFly Labs" width={28} height={28} style={{ objectFit: "contain", filter: "drop-shadow(0 0 6px rgba(168,85,247,0.45))" }} />
              <span style={{ color: "rgba(255,255,255,0.5)", fontWeight: 600, fontSize: "14px" }}>DFly Labs</span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} style={{ width: 38, height: 38, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.40)", textDecoration: "none", fontSize: "15px", transition: "all 0.2s" }}
                  onMouseOver={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#a78bfa"; el.style.borderColor = "rgba(109,40,217,0.40)"; el.style.background = "rgba(109,40,217,0.12)"; el.style.boxShadow = "0 0 12px rgba(109,40,217,0.25)"; }}
                  onMouseOut={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "rgba(255,255,255,0.40)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.03)"; el.style.boxShadow = "none"; }}>
                  <s.Icon size={15} />
                </a>
              ))}

              <a href="mailto:hello@dflylabs.com" style={{ display: "flex", alignItems: "center", gap: "7px", padding: "8px 16px", borderRadius: "9999px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", color: "rgba(255,255,255,0.45)", textDecoration: "none", fontSize: "13px", fontWeight: 500, transition: "all 0.2s" }}
                onMouseOver={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "#a78bfa"; el.style.borderColor = "rgba(109,40,217,0.40)"; el.style.background = "rgba(109,40,217,0.10)"; }}
                onMouseOut={e => { const el = e.currentTarget as HTMLAnchorElement; el.style.color = "rgba(255,255,255,0.45)"; el.style.borderColor = "rgba(255,255,255,0.08)"; el.style.background = "rgba(255,255,255,0.03)"; }}>
                <FiMail size={13} />
                hello@dflylabs.com
              </a>
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: "20px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.20)" }}>© 2025 DFly Labs. All rights reserved.</span>
            <nav style={{ display: "flex", gap: "24px" }}>
              {["Home", "Services", "Products", "Contact"].map((l) => (
                <a key={l} href="#" style={{ fontSize: "12px", color: "rgba(255,255,255,0.22)", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseOver={e => (e.currentTarget.style.color = "#a78bfa")}
                  onMouseOut={e => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}>
                  {l}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      {/* ================= RESPONSIVE STYLES ================= */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
      `}</style>

    </main>
  );
}

/* ─── Service Card Component ─── */
function ServiceCard({ title, desc, Icon }: { title: string; desc: string; Icon: () => JSX.Element }) {
  return (
    <div
      style={{ position: "relative", overflow: "hidden", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", padding: "22px", cursor: "pointer", transition: "all 0.3s", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)" }}
      onMouseOver={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(-4px)"; el.style.borderColor = "rgba(109,40,217,0.22)"; el.style.boxShadow = "0 20px 60px rgba(109,40,217,0.12), inset 0 1px 0 rgba(255,255,255,0.06)"; el.style.background = "rgba(109,40,217,0.05)"; }}
      onMouseOut={e => { const el = e.currentTarget as HTMLDivElement; el.style.transform = "translateY(0)"; el.style.borderColor = "rgba(255,255,255,0.06)"; el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.04)"; el.style.background = "rgba(255,255,255,0.02)"; }}
    >
      <div style={{ width: 42, height: 42, borderRadius: "12px", border: "1px solid rgba(255,255,255,0.08)", background: "rgba(109,40,217,0.14)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
        <Icon />
      </div>
      <h3 style={{ fontWeight: 700, fontSize: "15px", color: "#fff", margin: "0 0 8px" }}>{title}</h3>
      <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.32)", lineHeight: 1.65, margin: "0 0 16px" }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "#8b5cf6", fontWeight: 500 }}>
        Learn More
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </div>
    </div>
  );
}

/* ─── Service icons ─── */
function IconGlobe() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></svg>;
}
function IconLayers() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>;
}
function IconActivity() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>;
}
function IconMonitor() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>;
}
function IconEye() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 12s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" /><circle cx="12" cy="12" r="1" /></svg>;
}
function IconCloud() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 16.7a4 4 0 0 0-3-6.7 6 6 0 1 0-10.8 4" /><polyline points="16 16 12 12 8 16" /><line x1="12" y1="12" x2="12" y2="21" /></svg>;
}

const services = [
  { title: "Websites", desc: "Pixel-perfect, blazing-fast websites that elevate your brand and convert visitors into customers.", Icon: IconGlobe },
  { title: "Web Apps", desc: "Scalable, intuitive web applications built with modern frameworks and seamless user experiences.", Icon: IconLayers },
  { title: "SaaS Platforms", desc: "End-to-end SaaS development from MVP to enterprise-grade platforms with subscription billing and analytics.", Icon: IconActivity },
  { title: "SaaS Products", desc: "White-label and custom SaaS products designed to solve real problems and capture market share at scale.", Icon: IconMonitor },
  { title: "UI/UX Design", desc: "Human-centred design systems, prototypes and interfaces that delight users and drive engagement.", Icon: IconEye },
  { title: "Deployment & Hosting", desc: "Robust cloud infrastructure, CI/CD pipelines and managed hosting so your product ships fast and stays live.", Icon: IconCloud },
];

/* ─── Social links using react-icons ─── */
const socialLinks = [
  { label: "Twitter / X", href: "#", Icon: FaXTwitter },
  { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "GitHub", href: "#", Icon: FaGithub },
];