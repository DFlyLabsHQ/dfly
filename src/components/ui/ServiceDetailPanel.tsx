"use client";

import { useEffect } from "react";
import { FiX, FiCheck, FiArrowRight } from "react-icons/fi";
import type { ServiceOffering } from "@/types";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

interface ServiceDetailPanelProps {
  service: ServiceOffering;
  onClose: () => void;
}

export default function ServiceDetailPanel({ service, onClose }: ServiceDetailPanelProps) {
  // Lock body scroll while panel is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-[6px] transition-opacity duration-300"
      />

      {/* Panel — slides in from right */}
      <aside
        className="fixed top-0 right-0 bottom-0 z-[60] w-full max-w-[540px] flex flex-col overflow-y-auto"
        style={{
          background: "rgba(10,4,26,0.98)",
          borderLeft: "1px solid rgba(109,40,217,0.25)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          boxShadow: "-12px 0 60px rgba(109,40,217,0.15)",
          animation: "slideInRight 0.38s cubic-bezier(0.4,0,0.2,1) forwards",
        }}
      >
        <style>{`
          @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to   { transform: translateX(0);    opacity: 1; }
          }
        `}</style>

        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(109,40,217,0.18)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <ServiceIcon name={service.icon} />
            </div>
            <div>
              <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-0.5" style={{ color: "#a78bfa" }}>
                Our Service
              </p>
              <h2 className="font-bold text-[18px] text-white leading-tight">{service.title}</h2>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="w-9 h-9 rounded-[8px] flex items-center justify-center transition-all duration-200 hover:text-white flex-shrink-0"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "rgba(255,255,255,0.5)",
            }}>
            <FiX size={17} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 px-8 py-7 flex flex-col gap-8">

          {/* Tagline */}
          <p className="text-[16px] font-semibold leading-snug" style={{ color: "#c084fc" }}>
            "{service.tagline}"
          </p>

          {/* Plain-language explanation */}
          <div className="rounded-2xl p-5"
            style={{ background: "rgba(109,40,217,0.08)", border: "1px solid rgba(109,40,217,0.18)" }}>
            <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-2" style={{ color: "#a78bfa" }}>
              In simple terms
            </p>
            <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.75)" }}>
              {service.whatItMeans}
            </p>
          </div>

          {/* Full description */}
          <div>
            <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-3" style={{ color: "rgba(255,255,255,0.35)" }}>
              What we deliver
            </p>
            <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.55)" }}>
              {service.fullDesc}
            </p>
          </div>

          {/* Features */}
          <div>
            <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              What's included
            </p>
            <ul className="flex flex-col gap-3">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="mt-[3px] flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(109,40,217,0.20)", border: "1px solid rgba(109,40,217,0.30)" }}>
                    <FiCheck size={11} color="#a78bfa" />
                  </span>
                  <span className="text-[14px] leading-[1.6]" style={{ color: "rgba(255,255,255,0.65)" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Use cases */}
          <div>
            <p className="text-[11px] tracking-[0.08em] uppercase font-semibold mb-4" style={{ color: "rgba(255,255,255,0.35)" }}>
              Perfect for
            </p>
            <div className="flex flex-wrap gap-2">
              {service.useCases.map((u) => (
                <span key={u}
                  className="px-3 py-1.5 rounded-full text-[12px] font-medium"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.55)",
                  }}>
                  {u}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-8 py-6" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <a
            href="#contact"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-[13px] rounded-full text-white font-semibold text-[15px] no-underline transition-all duration-200 hover:-translate-y-[1px]"
            style={{
              background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)",
              boxShadow: "0 0 24px rgba(109,40,217,0.40)",
            }}>
            Start This Project <FiArrowRight size={15} />
          </a>
        </div>
      </aside>
    </>
  );
}