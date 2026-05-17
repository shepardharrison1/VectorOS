/**
 * PillarIcons — bespoke thin-line SVG icons.
 * Each is built around a "system" metaphor: nodes, flows, layers, lattices.
 * They are intentionally not generic Lucide icons.
 */

type IconProps = { className?: string };

const STROKE = "currentColor";
const SW = 1.25;

export function AiToolsIcon({ className }: IconProps) {
  // Inputs converging into a single output — a tool/agent abstraction
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="24" r="6" stroke={STROKE} strokeWidth={SW} />
      <circle cx="24" cy="24" r="1.5" fill={STROKE} />
      <circle cx="8" cy="12" r="1.5" fill={STROKE} />
      <circle cx="8" cy="36" r="1.5" fill={STROKE} />
      <circle cx="40" cy="24" r="1.5" fill={STROKE} />
      <path
        d="M9.5 12.5 L18 23 M9.5 35.5 L18 25 M30 24 L38.5 24"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SystemsIcon({ className }: IconProps) {
  // Nested squares — a system within a system
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <rect
        x="6"
        y="6"
        width="36"
        height="36"
        rx="2"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <rect
        x="14"
        y="14"
        width="20"
        height="20"
        rx="1.5"
        stroke={STROKE}
        strokeWidth={SW}
        strokeOpacity="0.5"
      />
      <circle cx="24" cy="24" r="2.5" fill={STROKE} />
      <path
        d="M6 16 H42 M6 32 H42 M16 6 V42 M32 6 V42"
        stroke={STROKE}
        strokeWidth="0.5"
        strokeOpacity="0.25"
      />
    </svg>
  );
}

export function LiteracyIcon({ className }: IconProps) {
  // Stacked layers — abstraction levels of "the stack"
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path
        d="M24 8 L40 16 L24 24 L8 16 Z"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
      />
      <path
        d="M8 24 L24 32 L40 24"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
        strokeOpacity="0.6"
      />
      <path
        d="M8 32 L24 40 L40 32"
        stroke={STROKE}
        strokeWidth={SW}
        strokeLinejoin="round"
        strokeOpacity="0.35"
      />
    </svg>
  );
}

export function WorkflowsIcon({ className }: IconProps) {
  // Branching workflow / pipeline
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="8" cy="24" r="3" stroke={STROKE} strokeWidth={SW} />
      <circle cx="24" cy="12" r="3" stroke={STROKE} strokeWidth={SW} />
      <circle cx="24" cy="36" r="3" stroke={STROKE} strokeWidth={SW} />
      <circle cx="40" cy="24" r="3" stroke={STROKE} strokeWidth={SW} />
      <path
        d="M10.5 22 L21.5 13 M10.5 26 L21.5 35 M26.5 13 L37.5 22 M26.5 35 L37.5 26"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <circle cx="8" cy="24" r="0.8" fill={STROKE} />
      <circle cx="40" cy="24" r="0.8" fill={STROKE} />
    </svg>
  );
}

export function PhilosophyIcon({ className }: IconProps) {
  // Orbit / horizon — looking forward
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <circle cx="24" cy="28" r="14" stroke={STROKE} strokeWidth={SW} />
      <ellipse
        cx="24"
        cy="28"
        rx="14"
        ry="4"
        stroke={STROKE}
        strokeWidth={SW}
        strokeOpacity="0.4"
      />
      <circle cx="24" cy="14" r="2.5" fill={STROKE} />
      <path
        d="M10 28 H38"
        stroke={STROKE}
        strokeWidth="0.6"
        strokeOpacity="0.4"
        strokeDasharray="1 2"
      />
    </svg>
  );
}
