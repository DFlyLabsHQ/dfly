import { HiRocketLaunch } from "react-icons/hi2";

export default function ProductsSection() {
  return (
    <section id="products" className="relative z-10 py-24 px-6">
      <div className="max-w-[900px] mx-auto text-center">

        <p
          className="text-[13px] tracking-[0.08em] uppercase font-semibold mb-3"
          style={{ color: "#a78bfa" }}
        >
          Products
        </p>

        <h2
          className="font-extrabold tracking-tight text-white mb-6"
          style={{ fontSize: "clamp(28px, 5vw, 44px)" }}
        >
          Something Exciting Is Brewing
        </h2>

        <div
          className="mx-auto mb-8 flex items-center justify-center rounded-3xl"
          style={{
            width: "120px",
            height: "120px",
            background: "rgba(167,139,250,0.08)",
            border: "1px solid rgba(167,139,250,0.2)",
          }}
        >
          <HiRocketLaunch
            size={56}
            style={{ color: "#a78bfa" }}
          />
        </div>

        <div
          className="rounded-3xl p-8 md:p-10"
          style={{
            border: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.02)",
            backdropFilter: "blur(12px)",
          }}
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Currently Under Development
          </h3>

          <p
            className="leading-8 text-sm md:text-base"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            At DFly Labs, we believe great products deserve patience. Our team
            is busy transforming ambitious ideas into meaningful digital
            experiences that are built to last.
          </p>

          <p
            className="mt-6 text-sm italic"
            style={{ color: "#a78bfa" }}
          >
            "Our dragons are still forging. Our butterflies are still
            evolving."
          </p>

          <p
            className="mt-2 text-sm"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Check back soon — the first generation of DFly products is on its
            way.
          </p>
        </div>
      </div>
    </section>
  );
}