"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

/**
 * VectorField — SVG grid of tiny arrows pointing along a smooth flow.
 * Each arrow's angle is derived from a sine field for an organic "current" feel.
 * Very low opacity — this is atmosphere, not content.
 */
export function VectorField({
  className,
  density = 10,
}: {
  className?: string;
  density?: number;
}) {
  // Precompute arrow positions/angles. Memoized so motion doesn't recompute.
  const arrows = useMemo(() => {
    const items: { x: number; y: number; angle: number; delay: number }[] = [];
    const cols = density;
    const rows = Math.round(density * 0.6);
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c + 0.5) * (100 / cols);
        const y = (r + 0.5) * (100 / rows);
        // Flow field: angle depends on position — gentle wave
        const angle =
          Math.sin((c / cols) * Math.PI * 1.5) * 35 +
          Math.cos((r / rows) * Math.PI) * 15;
        const delay = (r + c) * 0.05;
        items.push({ x, y, angle, delay });
      }
    }
    return items;
  }, [density]);

  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="vf-fade" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="vf-mask">
          <rect width="100" height="60" fill="url(#vf-fade)" />
        </mask>
      </defs>

      <g mask="url(#vf-mask)" stroke="white" strokeLinecap="round">
        {arrows.map((a, i) => (
          <motion.line
            key={i}
            x1={a.x - 0.7}
            y1={a.y}
            x2={a.x + 0.7}
            y2={a.y}
            strokeWidth={0.08}
            strokeOpacity={0.4}
            transform={`rotate(${a.angle} ${a.x} ${a.y})`}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.4, 0.4, 0.2, 0.4] }}
            transition={{
              duration: 6,
              delay: a.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </g>
    </svg>
  );
}
