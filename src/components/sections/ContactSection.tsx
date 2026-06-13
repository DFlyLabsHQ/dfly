import { FiMail, FiArrowRight } from "react-icons/fi";
import ScrollLink from "@/components/ui/ScrollLink";

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6">
      <div className="max-w-[780px] mx-auto">
        <div
          className="text-center rounded-3xl px-8 py-14 sm:px-14"
          style={{
            border: "1px solid rgba(109,40,217,0.25)",
            background: "rgba(109,40,217,0.07)",
            backdropFilter: "blur(20px)",
            boxShadow: "0 0 80px rgba(109,40,217,0.12)",
          }}
        >
          <p className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-4" style={{ color: "#a78bfa" }}>
            Get Started
          </p>
          <h2
            className="font-extrabold tracking-tight text-white mb-5"
            style={{ fontSize: "clamp(26px, 4vw, 42px)" }}
          >
            Ready to Build Something{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #c084fc 0%, #d946ef 55%, #9333ea 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                display: "inline",
              }}
            >
              Extraordinary?
            </span>
          </h2>
          <p
            className="text-[16px] leading-[1.7] max-w-[520px] mx-auto mb-10"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            Let's turn your idea into a premium digital product. Get in touch and
            we'll respond within 24 hours.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:info@dflylabs.com"
              className="inline-flex items-center gap-2 px-8 py-[13px] rounded-full text-white font-semibold text-[15px] no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_40px_rgba(109,40,217,0.55)]"
              style={{
                background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)",
                boxShadow: "0 0 24px rgba(109,40,217,0.40)",
              }}
            >
              <FiMail size={16} /> Start a Project
            </a>
            <ScrollLink
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-[13px] rounded-full font-semibold text-[15px] no-underline transition-all duration-200 hover:bg-[rgba(109,40,217,0.14)]"
              style={{
                border: "1px solid rgba(167,139,250,0.25)",
                background: "rgba(109,40,217,0.06)",
                backdropFilter: "blur(12px)",
                color: "rgba(221,214,254,0.85)",
              }}
            >
              View Services <FiArrowRight size={15} />
            </ScrollLink>
          </div>
        </div>
      </div>
    </section>
  );
}