"use client";

import { FiArrowRight } from "react-icons/fi";
import type { ServiceOffering } from "@/types";
import { ServiceIcon } from "@/components/ui/ServiceIcon";

interface ServiceCardProps {
  service: ServiceOffering;
  onSelect: (service: ServiceOffering) => void;
}

export default function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <button
      onClick={() => onSelect(service)}
      className="text-left w-full rounded-2xl p-[22px] cursor-pointer transition-all duration-300 hover:-translate-y-1 group focus:outline-none"
      style={{
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.02)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
      }}
      onMouseOver={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "rgba(109,40,217,0.22)";
        el.style.boxShadow = "0 20px 60px rgba(109,40,217,0.12), inset 0 1px 0 rgba(255,255,255,0.06)";
        el.style.background = "rgba(109,40,217,0.05)";
      }}
      onMouseOut={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.borderColor = "rgba(255,255,255,0.06)";
        el.style.boxShadow = "inset 0 1px 0 rgba(255,255,255,0.04)";
        el.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      {/* Icon */}
      <div className="w-[42px] h-[42px] rounded-xl flex items-center justify-center mb-4"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(109,40,217,0.14)" }}>
        <ServiceIcon name={service.icon} />
      </div>

      {/* Title */}
      <h3 className="font-bold text-[15px] text-white mb-2">{service.title}</h3>

      {/* Short desc */}
      <p className="text-[13px] leading-[1.65] mb-5" style={{ color: "rgba(255,255,255,0.32)" }}>
        {service.shortDesc}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-1.5 text-[13px] font-medium transition-all duration-200 group-hover:gap-2.5"
        style={{ color: "#8b5cf6" }}>
        Learn More <FiArrowRight size={13} />
      </div>
    </button>
  );
}