"use client";

import { motion } from "framer-motion";

/**
 * SystemNodes — floating system diagram fragment.
 * Nodes connected by thin lines, drifting and pulsing gently.
 * Represents "systems thinking" visually — small, calm, technical.
 */
type Node = { id: string; x: number; y: number; size?: number };
type Edge = { from: string; to: string };

const NODES: Node[] = [
  { id: "a", x: 12, y: 22, size: 3 },
  { id: "b", x: 28, y: 14 },
  { id: "c", x: 22, y: 38 },
  { id: "d", x: 78, y: 18 },
  { id: "e", x: 88, y: 36, size: 3 },
  { id: "f", x: 72, y: 44 },
  { id: "g", x: 50, y: 8, size: 2.5 },
  { id: "h", x: 50, y: 52, size: 2.5 },
];

const EDGES: Edge[] = [
  { from: "a", to: "b" },
  { from: "a", to: "c" },
  { from: "b", to: "c" },
  { from: "b", to: "g" },
  { from: "d", to: "e" },
  { from: "d", to: "f" },
  { from: "e", to: "f" },
  { from: "d", to: "g" },
  { from: "c", to: "h" },
  { from: "f", to: "h" },
];

export function SystemNodes({ className }: { className?: string }) {
  const map = Object.fromEntries(NODES.map((n) => [n.id, n]));

  return (
    <svg
      aria-hidden
      className={className}
      viewBox="0 0 100 60"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sn-fade" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="sn-mask">
          <rect width="100" height="60" fill="url(#sn-fade)" />
        </mask>
      </defs>

      <g mask="url(#sn-mask)">
        {/* Edges — thin connector lines */}
        {EDGES.map((e, i) => {
          const a = map[e.from];
          const b = map[e.to];
          return (
            <motion.line
              key={`edge-${i}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="white"
              strokeWidth={0.08}
              strokeOpacity={0.18}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.18 }}
              transition={{
                duration: 2,
                delay: 0.4 + i * 0.1,
                ease: "easeOut",
              }}
            />
          );
        })}

        {/* Nodes — small dots with halo */}
        {NODES.map((n, i) => (
          <motion.g
            key={n.id}
            initial={{ opacity: 0, scale: 0.4 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.2 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* halo */}
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={(n.size ?? 2) * 1.6}
              fill="url(#node-glow)"
              opacity={0.5}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* dot */}
            <circle
              cx={n.x}
              cy={n.y}
              r={(n.size ?? 2) * 0.35}
              fill="white"
              opacity={0.85}
            />
            {/* ring */}
            <circle
              cx={n.x}
              cy={n.y}
              r={(n.size ?? 2) * 0.7}
              fill="none"
              stroke="white"
              strokeWidth={0.08}
              strokeOpacity={0.4}
            />
          </motion.g>
        ))}
      </g>
    </svg>
  );
}
