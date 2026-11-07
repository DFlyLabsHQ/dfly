"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { HiArrowTopRightOnSquare, HiCheckCircle, HiSparkles } from "react-icons/hi2";
import SectionReveal from "@/components/ui/SectionReveal";
import { DFLY_TRIPS_FEATURES, DFLY_TRIPS_SHOTS, DFLY_TRIPS_URL } from "@/data/site-content";

const ACCENT = "#a78bfa";

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const shot = DFLY_TRIPS_SHOTS[active];

  return (
    <section id="products" className="relative z-10 py-24 px-4 sm:px-6">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-3" style={{ color: ACCENT }}>
            Products
          </p>
          <h2 className="font-extrabold tracking-tight text-white mb-5" style={{ fontSize: "clamp(28px, 5vw, 44px)" }}>
            Our First Product Is Live
          </h2>
          <p className="text-sm md:text-base leading-7" style={{ color: "rgba(255,255,255,0.65)" }}>
            DFly Trips gives a travel company its own branded booking website and a complete admin panel - trips, dates,
            bookings, payments and travellers, all in one place.
          </p>
        </div>

        <SectionReveal>
          <div
            className="rounded-[28px] p-5 sm:p-8 lg:p-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center"
            style={{
              border: "1px solid rgba(167,139,250,0.18)",
              background: "linear-gradient(160deg, rgba(167,139,250,0.08), rgba(255,255,255,0.02) 45%, rgba(249,115,22,0.05))",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 80px rgba(109,40,217,0.12)",
            }}
          >
            {/* About the product */}
            <div className="min-w-0">
              <div className="flex items-center gap-3">
                <div
                  className="flex size-14 shrink-0 items-center justify-center rounded-2xl"
                  style={{ background: "rgba(2,27,69,0.85)", border: "1px solid rgba(254,125,16,0.35)" }}
                >
                  <Image src="/products/dfly-trips/logo-light.png" alt="" width={44} height={26} className="object-contain" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-2xl font-bold text-white">DFly Trips</h3>
                  <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)" }}>
                    Trip booking platform for travel companies
                  </p>
                </div>
                <span
                  className="ml-auto hidden sm:inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{ background: "rgba(34,197,94,0.12)", color: "#86efac", border: "1px solid rgba(34,197,94,0.3)" }}
                >
                  <span className="size-1.5 rounded-full bg-green-400" /> Live
                </span>
              </div>

              <p className="mt-6 text-sm md:text-[15px] leading-7" style={{ color: "rgba(255,255,255,0.7)" }}>
                Travellers browse trips, pick a date, book for their whole group and pay online. The company runs everything
                from its admin panel, on its own address and in its own colours.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {DFLY_TRIPS_FEATURES.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <HiCheckCircle size={18} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={DFLY_TRIPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-semibold text-white transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
                  style={{ background: "linear-gradient(90deg, #7c3aed, #c026d3)", boxShadow: "0 10px 30px -10px rgba(192,38,211,0.6)" }}
                >
                  Visit DFly Trips <HiArrowTopRightOnSquare size={18} className="transition-transform group-hover:translate-x-0.5" />
                </a>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                  trips.dfly.co.in
                </span>
              </div>
            </div>

            {/* Screens */}
            <div className="min-w-0">
              <div className="mb-4 flex flex-wrap justify-center gap-2 lg:justify-start" role="tablist" aria-label="DFly Trips screens">
                {DFLY_TRIPS_SHOTS.map((s, i) => (
                  <button
                    key={s.label}
                    type="button"
                    role="tab"
                    aria-selected={i === active}
                    onClick={() => setActive(i)}
                    className="rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                    style={
                      i === active
                        ? { background: "rgba(167,139,250,0.18)", color: "#fff", border: "1px solid rgba(167,139,250,0.45)" }
                        : { background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.6)", border: "1px solid rgba(255,255,255,0.08)" }
                    }
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              <a href={DFLY_TRIPS_URL} target="_blank" rel="noopener noreferrer" className="relative block pb-10 sm:pb-14" aria-label="Open DFly Trips">
                {/* computer */}
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", background: "#0b0614", boxShadow: "0 30px 80px -30px rgba(0,0,0,0.8)" }}
                >
                  <div className="flex items-center gap-1.5 px-3 py-2" style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 truncate rounded-md px-2 py-0.5 text-[11px]" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.5)" }}>
                      {shot.address}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10]">
                    <AnimatePresence mode="wait">
                      <motion.div key={shot.desktop} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                        <Image src={shot.desktop} alt={shot.alt} fill sizes="(min-width: 1024px) 700px, 100vw" className="object-cover object-top" priority={active === 0} />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                {/* phone */}
                <div
                  className="absolute right-2 bottom-0 w-[30%] max-w-[200px] min-w-[96px] overflow-hidden rounded-[22px] sm:rounded-[28px] p-1 sm:p-1.5"
                  style={{ background: "#111", border: "1px solid rgba(255,255,255,0.15)", boxShadow: "0 25px 60px -15px rgba(0,0,0,0.9)" }}
                >
                  <div className="relative aspect-[9/19.5] overflow-hidden rounded-[18px] sm:rounded-[22px]">
                    <AnimatePresence mode="wait">
                      <motion.div key={shot.phone} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className="absolute inset-0">
                        <Image src={shot.phone} alt="" fill sizes="200px" className="object-cover object-top" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </a>
              <p className="mt-1 text-center text-xs lg:text-left" style={{ color: "rgba(255,255,255,0.45)" }}>
                {shot.caption}
              </p>
            </div>
          </div>
        </SectionReveal>

        <p className="mt-10 flex items-center justify-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
          <HiSparkles style={{ color: ACCENT }} /> More DFly products are on the way.
        </p>
      </div>
    </section>
  );
}
