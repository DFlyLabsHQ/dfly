"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FiX, FiHome, FiBriefcase, FiBox, FiMail } from "react-icons/fi";
import { NAV_LINKS } from "@/data/site-content";
import {
  HiOutlineArrowPath,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

const NAV_ICONS: Record<string, React.ElementType> = {
  Home: FiHome,
  Services: FiBriefcase,
  Products: FiBox,
  Contact: FiMail,
  About: HiOutlineInformationCircle,
  Process: HiOutlineArrowPath,
};

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}
export default function MobileSidebar({
  isOpen,
  onClose,
  activeSection,
  setActiveSection,
}: MobileSidebarProps) {
  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");

    setActiveSection(sectionId);

    onClose();

    setTimeout(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 380);
  };

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-[5px] transition-opacity duration-[350ms] ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[280px] flex flex-col transition-transform duration-[380ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{
          background: "rgba(10,4,26,0.97)",
          borderLeft: "1px solid rgba(109,40,217,0.25)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: isOpen ? "-8px 0 40px rgba(109,40,217,0.18)" : "none",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 py-5"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/dfly-logo.png"
              alt="DFly Labs"
              width={30}
              height={30}
              className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.55)]"
            />
            <span className="font-bold text-[15px] text-white">DFly Labs</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-9 h-9 flex items-center justify-center rounded-[8px] transition-all duration-200 hover:bg-[rgba(109,40,217,0.22)]"
            style={{
              background: "rgba(109,40,217,0.12)",
              border: "1px solid rgba(109,40,217,0.25)",
              color: "#a78bfa",
            }}
          >
            <FiX size={18} />
          </button>
        </div>
        <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
          {NAV_LINKS.map(({ label, href }) => {
            const Icon = NAV_ICONS[label] ?? FiHome;

            const sectionId = href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <button
                key={label}
                onClick={() => handleNavClick(href)}
                className={`flex items-center gap-3 px-4 py-[13px] rounded-[10px] text-[15px] font-medium text-left w-full transition-all duration-200 border
          ${
            isActive
              ? "text-[#a78bfa] bg-[rgba(109,40,217,0.14)] border-[rgba(109,40,217,0.25)]"
              : "text-white/65 bg-transparent border-transparent hover:text-[#a78bfa] hover:bg-[rgba(109,40,217,0.10)] hover:border-[rgba(109,40,217,0.20)]"
          }`}
              >
                <Icon size={17} className="opacity-80 flex-shrink-0" />
                {label}
              </button>
            );
          })}
        </nav>

        {/* Footer CTA */}
        <div
          className="px-6 py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <a
            href="#contact"
            onClick={() => handleNavClick("#contact")}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full text-white font-semibold text-[14px] no-underline transition-all duration-200 hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)",
              boxShadow: "0 0 20px rgba(109,40,217,0.35)",
            }}
          >
            <FiMail size={14} />
            Get in Touch
          </a>
        </div>
      </aside>
    </>
  );
}
