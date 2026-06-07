type ButtonProps = {
  title: string;
  variant?: "primary" | "secondary";
};

export default function Button({
  title,
  variant = "primary",
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <button
      className={`
        group relative overflow-hidden rounded-2xl
        transition-all duration-300
        hover:scale-[1.03]
        active:scale-[0.98]
        cursor-pointer
      `}
    >
      {isPrimary ? (
        <>
          {/* Glow */}
          <div
            className="
              absolute inset-0 rounded-2xl
              bg-gradient-to-r
              from-violet-500
              via-fuchsia-500
              to-violet-500
              opacity-80
              blur-md
              transition-all duration-300
              group-hover:blur-xl
            "
          />

          {/* Button */}
          <div
            className="
              relative rounded-2xl
              bg-gradient-to-r
              from-violet-600
              to-fuchsia-600
              px-5 py-2.5
              font-semibold
              tracking-wide
              text-white
              shadow-[0_10px_60px_rgba(168,85,247,0.35)]
            "
          >
            {title}
          </div>
        </>
      ) : (
        <>
          {/* Glass button */}
          <div
            className="
              relative overflow-hidden rounded-2xl
              border border-white/10
              bg-white/[0.04]
              px-5 py-2.5
              font-medium
              text-zinc-200
              backdrop-blur-xl
              transition-all duration-300
              hover:border-violet-400/30
              hover:bg-white/[0.08]
              hover:text-white
              hover:shadow-[0_0_50px_rgba(139,92,246,0.18)]
            "
          >
            <span className="relative z-10">{title}</span>

            {/* Shine effect */}
            <div
              className="
                absolute inset-0
                -translate-x-full
                bg-gradient-to-r
                from-transparent
                via-white/10
                to-transparent
                transition-transform
                duration-700
                group-hover:translate-x-full
              "
            />
          </div>
        </>
      )}
    </button>
  );
}