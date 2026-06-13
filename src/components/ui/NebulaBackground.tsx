export default function NebulaBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 bg-[#06010f]" />

      {/* Violet clouds */}
      <div
        className="absolute -top-[180px] -left-[120px] w-[700px] h-[700px] rounded-full blur-[90px]"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.22) 0%, rgba(109,40,217,0.10) 45%, transparent 70%)" }}
      />
      <div
        className="absolute -top-[120px] -right-[120px] w-[850px] h-[850px] rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(147,51,234,0.20) 0%, rgba(126,34,206,0.10) 50%, transparent 72%)" }}
      />
      <div
        className="absolute -bottom-[180px] -left-[80px] w-[650px] h-[450px] rounded-full blur-[100px] rotate-12"
        style={{ background: "radial-gradient(circle, rgba(109,40,217,0.16) 0%, rgba(109,40,217,0.07) 55%, transparent 75%)" }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1100px] h-[180px] rounded-full blur-[80px] bg-[rgba(109,40,217,0.10)]" />
      <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[110px] bg-[rgba(109,40,217,0.10)]" />

      {/* Stars */}
      <div
        className="absolute inset-0 opacity-[0.65]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 15% 25%, rgba(255,255,255,.85) 1px, transparent 1px),
            radial-gradient(circle at 75% 18%, rgba(255,255,255,.55) 1px, transparent 1px),
            radial-gradient(circle at 48% 55%, rgba(255,255,255,.65) 1px, transparent 1px),
            radial-gradient(circle at 8% 75%, rgba(255,255,255,.35) 1px, transparent 1px),
            radial-gradient(circle at 88% 65%, rgba(255,255,255,.45) 1px, transparent 1px),
            radial-gradient(circle at 62% 8%, rgba(255,255,255,.75) 1px, transparent 1px),
            radial-gradient(circle at 35% 88%, rgba(255,255,255,.30) 1px, transparent 1px),
            radial-gradient(circle at 92% 40%, rgba(255,255,255,.40) 1px, transparent 1px),
            radial-gradient(circle at 5% 48%, rgba(255,255,255,.50) 1px, transparent 1px),
            radial-gradient(circle at 55% 32%, rgba(255,255,255,.28) 1px, transparent 1px),
            radial-gradient(circle at 25% 60%, rgba(255,255,255,.35) 1px, transparent 1px),
            radial-gradient(circle at 70% 80%, rgba(255,255,255,.28) 1px, transparent 1px),
            radial-gradient(circle at 40% 15%, rgba(255,255,255,.45) 1px, transparent 1px),
            radial-gradient(circle at 82% 35%, rgba(255,255,255,.32) 1px, transparent 1px),
            radial-gradient(circle at 18% 90%, rgba(255,255,255,.40) 1px, transparent 1px)
          `,
        }}
      />
    </div>
  );
}