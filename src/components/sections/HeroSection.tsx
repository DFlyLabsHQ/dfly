import Image from "next/image";
import ScrollLink from "@/components/ui/ScrollLink";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-[900px] mx-auto text-center">

        {/* Badge */}
        <div
          className="inline-flex items-center rounded-full px-[22px] py-2 text-[13px] tracking-[0.05em] mb-12"
          style={{
            border: "1px solid rgba(167,139,250,0.20)",
            background: "rgba(109,40,217,0.08)",
            backdropFilter: "blur(12px)",
            color: "rgba(221,214,254,0.85)",
          }}
        >
          Building Premium Digital Products
        </div>

        {/* Logo */}
        <div className="relative flex justify-center mb-[52px]">
          <div className="absolute w-[280px] h-[280px] rounded-full blur-[90px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 bg-[rgba(109,40,217,0.22)]" />
          <Image
            src="/logo/dfly-logo.png"
            alt="DFly Labs Logo"
            width={200}
            height={200}
            priority
            className="relative z-[1] object-contain drop-shadow-[0_0_38px_rgba(168,85,247,0.50)]"
          />
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-[1.08] tracking-tight text-white m-0"
          style={{ fontSize: "clamp(42px, 7vw, 72px)" }}
        >
          Engineering{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #c084fc 0%, #d946ef 55%, #9333ea 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline",
            }}
          >
            Powerful
            <br />
            Digital Experiences
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="mt-7 max-w-[560px] mx-auto text-[17px] leading-[1.7]"
          style={{ color: "rgba(255,255,255,0.35)" }}
        >
          DFly Labs blends creativity and scalable technology to craft modern websites,
          applications and SaaS platforms.
        </p>

        {/* CTAs */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <ScrollLink
            href="#contact"
            className="inline-flex items-center px-8 py-[13px] rounded-full text-white font-semibold text-[15px] no-underline transition-all duration-200 hover:-translate-y-[1px] hover:shadow-[0_0_40px_rgba(109,40,217,0.55)]"
            style={{
              background: "linear-gradient(135deg, #6d28d9 0%, #7c3aed 60%, #6d28d9 100%)",
              boxShadow: "0 0 24px rgba(109,40,217,0.40), 0 4px 16px rgba(109,40,217,0.25)",
            }}
          >
            Get in Touch
          </ScrollLink>
          <ScrollLink
            href="#services"
            className="inline-flex items-center px-8 py-[13px] rounded-full font-semibold text-[15px] no-underline transition-all duration-200 hover:bg-[rgba(109,40,217,0.14)]"
            style={{
              border: "1px solid rgba(167,139,250,0.25)",
              background: "rgba(109,40,217,0.06)",
              backdropFilter: "blur(12px)",
              color: "rgba(221,214,254,0.85)",
            }}
          >
            Our Services
          </ScrollLink>
        </div>
      </div>
    </section>
  );
}