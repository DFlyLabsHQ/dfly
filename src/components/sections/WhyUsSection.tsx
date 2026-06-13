import { WHY_US_ITEMS } from "@/data/site-content";

export default function WhyUsSection() {
  return (
    <section id="about" className="relative z-10 py-24 px-6">
      <div className="max-w-[1280px] mx-auto">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <p
            className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-3"
            style={{ color: "#a78bfa" }}
          >
            About Us
          </p>

          <h2
            className="font-extrabold tracking-tight text-white mb-6"
            style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
          >
            Where the Dragon Meets the Butterfly
          </h2>

          <p
            className="text-sm md:text-base leading-8"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            DFly Labs represents the union of two powerful ideas: the Dragon's
            strength, ambition, and determination, combined with the Butterfly's
            adaptability, creativity, and evolution. We build digital products,
            platforms, and experiences that are engineered to be robust while
            remaining flexible enough to grow with changing markets and user
            needs. Our mission is to transform bold ideas into impactful
            solutions through thoughtful design, modern technology, and
            relentless innovation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_US_ITEMS.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                style={{
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Icon
                  size={32}
                  className="mb-4"
                  style={{ color: "#a78bfa" }}
                />

                <h3 className="font-bold text-[15px] text-white mb-2">
                  {item.title}
                </h3>

                <p
                  className="text-[13px] leading-[1.65]"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}