"use client";

import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface ScrollLinkProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function ScrollLink({ href, className, style, children }: ScrollLinkProps) {
  const { scrollTo } = useSmoothScroll();
  return (
    <a href={href} onClick={scrollTo(href)} className={className} style={style}>
      {children}
    </a>
  );
}