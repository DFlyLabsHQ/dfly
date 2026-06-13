import Image from "next/image";
import { FiMail, FiPhone } from "react-icons/fi";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
} from "react-icons/fa6";
import ScrollLink from "@/components/ui/ScrollLink";
import { NAV_LINKS, SOCIAL_LINKS } from "@/data/site-content";

const SOCIAL_ICONS: Record<string, React.ElementType> = {
  twitter: FaXTwitter,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  phone: FiPhone,
  github: FaGithub,
};

export default function Footer() {
  return (
    <footer
      className="relative z-10 py-10 px-6"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-5 mb-7">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <Image
              src="/logo/dfly-logo.png"
              alt="DFly Labs"
              width={28}
              height={28}
              className="object-contain drop-shadow-[0_0_6px_rgba(168,85,247,0.45)]"
            />
            <span
              className="font-semibold text-sm"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              DFly Labs
            </span>
          </div>

          {/* Social + email */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {SOCIAL_LINKS.map(({ label, href, iconKey }) => {
              const Icon = SOCIAL_ICONS[iconKey] ?? FiMail;
              return (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-full flex items-center justify-center no-underline transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    color: "rgba(255,255,255,0.40)",
                  }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:info@dflylabs.com"
              className="flex items-center gap-[7px] px-4 py-2 rounded-full text-[13px] font-medium no-underline transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
                color: "rgba(255,255,255,0.45)",
              }}
            >
              <FiMail size={13} />
              info@dflylabs.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-wrap items-center justify-between gap-3 pt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <span className="text-xs" style={{ color: "rgba(255,255,255,0.20)" }}>
            © {new Date().getFullYear()} DFly Labs. All rights reserved.
          </span>
          <nav className="flex gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <ScrollLink
                key={label}
                href={href}
                className="text-xs no-underline transition-colors duration-200 hover:text-[#a78bfa]"
                style={{ color: "rgba(255,255,255,0.22)" }}
              >
                {label}
              </ScrollLink>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
