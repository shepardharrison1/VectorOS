"use client";

import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";
import {
  AiToolsIcon,
  SystemsIcon,
  LiteracyIcon,
  WorkflowsIcon,
  PhilosophyIcon,
} from "@/components/effects/pillar-icons";

/**
 * Pillars — five core areas VectorOS teaches.
 * Each card has a cursor-following spotlight, depth on hover, and an entry animation.
 */

type Pillar = {
  index: string;
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const PILLARS: Pillar[] = [
  {
    index: "01",
    title: "AI Tools",
    description:
      "Learn the tools that matter — Claude, ChatGPT, agents, automations — and how to apply them with intent.",
    Icon: AiToolsIcon,
  },
  {
    index: "02",
    title: "Systems Thinking",
    description:
      "Understand how parts interact, where leverage lives, and how to think in feedback loops, not lists.",
    Icon: SystemsIcon,
  },
  {
    index: "03",
    title: "Tech Literacy",
    description:
      "Demystify the stack. From models to interfaces to infrastructure — see how modern technology actually works.",
    Icon: LiteracyIcon,
  },
  {
    index: "04",
    title: "Practical Workflows",
    description:
      "Production-ready patterns for research, writing, coding, and operations — designed to be replicated.",
    Icon: WorkflowsIcon,
  },
  {
    index: "05",
    title: "AI Philosophy & Future",
    description:
      "The deeper questions. Where AI is going, what it changes, and how to navigate it with clarity.",
    Icon: PhilosophyIcon,
  },
];

export function Pillars() {
  return (
    <section
      id="pillars"
      className="relative border-t border-white/[0.06] py-28 sm:py-36"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>Curriculum / 05</SectionBadge>
          <h2 className="mt-6 text-balance text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            <span className="text-gradient">Five pillars</span> for the
            infrastructure age.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            A focused curriculum — each pillar interconnects with the others.
            Together they form a coherent operating system for working with
            modern technology.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {PILLARS.map((p, i) => (
            <PillarCard
              key={p.index}
              {...p}
              className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}
              delay={i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PillarCard({
  index,
  title,
  description,
  Icon,
  className = "",
  delay = 0,
}: Pillar & { className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [3, -3]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-3, 3]), {
    stiffness: 200,
    damping: 25,
  });

  const spotlightX = useTransform(mouseX, (v) => `${v * 100}%`);
  const spotlightY = useTransform(mouseY, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(400px circle at ${spotlightX} ${spotlightY}, hsla(0,0%,100%,0.06), transparent 50%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mouseX.set((e.clientX - r.left) / r.width);
    mouseY.set((e.clientY - r.top) / r.height);
  }

  function handleMouseLeave() {
    mouseX.set(0.5);
    mouseY.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-colors duration-500 hover:border-white/15 sm:p-8 ${className}`}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: spotlight }}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-foreground/90 transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-white/20">
            <Icon className="h-6 w-6" />
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{index}</span>
            <span className="h-px w-6 bg-white/15" />
          </div>
        </div>

        <h3 className="mt-8 text-xl font-medium tracking-tight sm:text-2xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        <div className="mt-8 flex items-center gap-1.5 text-xs text-foreground/60 transition-all duration-300 group-hover:text-foreground group-hover:gap-2.5">
          <span>Learn more</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>
    </motion.div>
  );
}
