"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import MobileSidebar from "@/components/layout/MobileSidebar";
import { NAV_LINKS } from "@/data/site-content";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Highlight active nav link on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-30 pt-4 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div
            className="flex items-center justify-between rounded-full px-5 py-[10px] transition-all duration-300"
            style={{
              border: scrolled
                ? "1px solid rgba(109,40,217,0.22)"
                : "1px solid rgba(255,255,255,0.08)",
              background: scrolled
                ? "rgba(10,4,26,0.85)"
                : "rgba(255,255,255,0.03)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              boxShadow: scrolled
                ? "0 0 60px rgba(109,40,217,0.12), inset 0 1px 0 rgba(255,255,255,0.05)"
                : "0 0 50px rgba(109,40,217,0.07), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 no-underline"
            >
              <Image
                src="/logo/dfly-logo.png"
                alt="DFly Labs"
                width={36}
                height={36}
                className="object-contain drop-shadow-[0_0_10px_rgba(168,85,247,0.55)]"
              />
              <span className="font-semibold text-[15px] tracking-wide text-white">
                DFly Labs
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-[14px]">
              {NAV_LINKS.map(({ label, href }) => {
                const sectionId = href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={label}
                    href={href}
                    onClick={(e) => handleNavClick(e, href)}
                    className={`no-underline font-medium transition-colors duration-200 ${isActive ? "text-[#a78bfa]" : "text-white/50 hover:text-[#a78bfa]"}`}
                  >
                    {label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            {/* <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-[13px] font-semibold text-white no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_30px_rgba(109,40,217,0.5)]"
              style={{
                background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 100%)",
                boxShadow: "0 0 20px rgba(109,40,217,0.30)",
              }}
            >
              Get in Touch
            </a> */}

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              className="md:hidden flex items-center justify-center w-[38px] h-[38px] rounded-[9px] transition-all duration-200 hover:bg-[rgba(109,40,217,0.18)]"
              style={{
                background: "rgba(109,40,217,0.10)",
                border: "1px solid rgba(109,40,217,0.22)",
                color: "#a78bfa",
              }}
            >
              <FiMenu size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile sidebar */}
      <MobileSidebar
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
}
