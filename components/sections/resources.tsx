"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Cpu, GitBranch, Layers, Telescope } from "lucide-react";
import { SectionBadge } from "@/components/ui/section-badge";

/**
 * Resources — featured learning materials.
 * Day-one state: all resources marked "Coming soon" with consistent honest framing.
 * Asymmetric grid: one large feature card + four standard cards.
 */

type Resource = {
  title: string;
  description: string;
  category: string;
  status: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const RESOURCES: Resource[] = [
  {
    title: "AI Starter Guide",
    description:
      "A grounded, no-hype introduction to working with modern AI tools. Where to start, what to learn first, and what to ignore.",
    category: "Foundations",
    status: "Coming soon",
    Icon: BookOpen,
  },
  {
    title: "Understanding AI Agents",
    description:
      "How agents actually work — planning, tool use, memory, and the limits you should know before you ship one.",
    category: "Deep Dive",
    status: "Coming soon",
    Icon: Cpu,
  },
  {
    title: "Claude Workflows",
    description:
      "Battle-tested patterns for research, writing, coding, and operations with Claude.",
    category: "Workflows",
    status: "Coming soon",
    Icon: GitBranch,
  },
  {
    title: "Productivity Systems",
    description:
      "Designing personal systems that compound — built on infrastructure thinking, not productivity theater.",
    category: "Systems",
    status: "Coming soon",
    Icon: Layers,
  },
  {
    title: "The Future of AI",
    description:
      "Where this is going, what changes, and how to think about the next decade.",
    category: "Essay",
    status: "Coming soon",
    Icon: Telescope,
  },
];

export function Resources() {
  const [feature, ...rest] = RESOURCES;

  return (
    <section
      id="resources"
      className="relative border-t border-white/[0.06] py-28 sm:py-36"
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <SectionBadge>Library</SectionBadge>
            <h2 className="mt-6 text-balance text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
              Resources <span className="text-gradient">in the works.</span>
            </h2>
            <p className="mt-4 max-w-lg text-balance text-muted-foreground">
              Long-form essays, guides, and workflows — written to be referenced,
              not skimmed. First releases drop with the summer cohort.
            </p>
          </div>
          <a
            href="#community"
            className="group inline-flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-foreground"
          >
            Get notified in Discord
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          <FeatureCard resource={feature} />
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {rest.map((r, i) => (
              <StandardCard key={r.title} resource={r} delay={i * 0.06} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ resource }: { resource: Resource }) {
  const { title, description, category, status, Icon } = resource;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-colors duration-500 hover:border-white/15 sm:p-8"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 opacity-50 transition-opacity duration-700 group-hover:opacity-100">
        <svg width="400" height="400" viewBox="0 0 400 400" fill="none">
          <defs>
            <radialGradient id="arc-fade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
          </defs>
          {[60, 100, 140, 180, 220, 260].map((r, i) => (
            <circle
              key={r}
              cx="200"
              cy="200"
              r={r}
              stroke="url(#arc-fade)"
              strokeWidth="0.8"
              fill="none"
              strokeDasharray={i % 2 ? "1 4" : undefined}
            />
          ))}
          <circle cx="200" cy="200" r="4" fill="white" opacity="0.6" />
        </svg>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]"
      />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02]">
            <Icon className="h-5 w-5 text-foreground/90" strokeWidth={1.5} />
          </div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>{category}</span>
            <span className="h-px w-4 bg-white/15" />
            <span className="text-foreground/70">{status}</span>
          </div>
        </div>

        <div className="mt-auto pt-12">
          <h3 className="text-balance text-3xl font-medium tracking-[-0.02em] sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function StandardCard({
  resource,
  delay,
}: {
  resource: Resource;
  delay: number;
}) {
  const { title, description, category, status, Icon } = resource;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex min-h-[200px] flex-col overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-6 transition-colors duration-500 hover:border-white/15"
    >
      <div className="flex items-center justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.02]">
          <Icon className="h-4 w-4 text-foreground/90" strokeWidth={1.5} />
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em] text-foreground/70">
          {status}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>

      <div className="mt-auto flex items-center gap-3 pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        <span>{category}</span>
      </div>
    </motion.div>
  );
}
