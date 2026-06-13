const STROKE = "#7c3aed";
const S = { width: 20, height: 20, fill: "none" as const, stroke: STROKE, strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function ServiceIcon({ name }: { name: string }) {
  switch (name) {
    case "IconWebApp":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18M9 21V9" />
        </svg>
      );
    case "IconMobile":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      );
    case "IconPrototype":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "IconSaas":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      );
    case "IconCloud":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <path d="M20 16.7a4 4 0 0 0-3-6.7 6 6 0 1 0-10.8 4" />
          <polyline points="16 16 12 12 8 16" />
          <line x1="12" y1="12" x2="12" y2="21" />
        </svg>
      );
    case "IconMaintain":
      return (
        <svg {...S} viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      );
    default:
      return null;
  }
}