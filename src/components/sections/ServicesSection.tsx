"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import ServiceDetailPanel from "@/components/ui/ServiceDetailPanel";
import { SERVICE_OFFERINGS } from "@/data/site-content";
import type { ServiceOffering } from "@/types";

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceOffering | null>(null);

  return (
    <>
      <section id="services" className="relative z-10 py-24 px-6">
        <div className="max-w-[1280px] mx-auto">

          {/* Section header */}
          <div className="text-center mb-14">
            <p
              className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-3"
              style={{ color: "#a78bfa" }}
            >
              What We Build
            </p>
            <h2
              className="font-extrabold tracking-tight text-white mb-4"
              style={{ fontSize: "clamp(28px, 5vw, 46px)" }}
            >
              Our Services
            </h2>
            <p
              className="max-w-[520px] mx-auto text-[16px] leading-[1.7]"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Click any service to learn more — we explain everything in plain language,
              no technical background needed.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICE_OFFERINGS.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onSelect={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Detail panel overlay */}
      {selectedService && (
        <ServiceDetailPanel
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
}