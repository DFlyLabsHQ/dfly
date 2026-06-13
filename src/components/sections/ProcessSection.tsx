import { PROCESS_STEPS } from "@/data/site-content";

export default function ProcessSection() {
  return (
    <section id="process" className="relative z-10 py-24 px-6">
      <div className="max-w-[860px] mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-3" style={{ color: "#a78bfa" }}>
            Process
          </p>
          <h2
            className="font-extrabold tracking-tight text-white"
            style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
          >
            How We Work
          </h2>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-4">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              className="flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-[2px]"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                background: "rgba(255,255,255,0.02)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Step number bubble */}
              <div
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-[15px] text-white"
                style={{
                  background: "linear-gradient(135deg, #6d28d9, #7c3aed)",
                  boxShadow: "0 0 16px rgba(109,40,217,0.35)",
                }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-[15px] text-white mb-1">{step.title}</h3>
                <p className="text-[13px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.35)" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}