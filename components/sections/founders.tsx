"use client";

import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/section-badge";

/**
 * Founders — the "by students, for students" anchor.
 * Two founder cards with name, role, one-line bio.
 * No photos yet (placeholder monogram tiles). Add photos later by
 * dropping JPG/PNGs into /public/ and updating the `image` field below.
 */

type Founder = {
  name: string;
  role: string;
  bio: string;
  monogram: string;
  // Future: image: string;
};

const FOUNDERS: Founder[] = [
  {
    name: "Harrison Shepard",
    role: "Founder",
    bio: "Building VectorOS to make AI literacy and systems thinking accessible to the students who'll grow up inside this transformation.",
    monogram: "HS",
  },
  {
    name: "Davis Hunn",
    role: "Co-founder",
    bio: "Bringing rigor and curiosity to how students learn the tools and systems that increasingly run the world.",
    monogram: "DH",
  },
];

export function Founders() {
  return (
    <section
      id="founders"
      className="relative border-t border-white/[0.06] py-28 sm:py-36"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>The Team</SectionBadge>
          <h2 className="mt-6 text-balance text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            Built by students, <span className="text-gradient">in public.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            VectorOS was founded in 2026 by two high school students in
            Lakewood Ranch, Florida — building the platform we wish we'd had
            when we started learning this ourselves.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-2">
          {FOUNDERS.map((f, i) => (
            <FounderCard key={f.name} founder={f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FounderCard({
  founder,
  delay,
}: {
  founder: Founder;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] p-8 transition-colors duration-500 hover:border-white/15"
    >
      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,black_30%,transparent_100%)]"
      />

      <div className="relative flex items-start gap-5">
        {/* Monogram avatar placeholder — replace with real photo later */}
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] font-mono text-lg tracking-[0.05em] text-foreground/90">
          {founder.monogram}
        </div>

        <div className="flex-1">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="text-lg font-medium tracking-tight">
              {founder.name}
            </h3>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {founder.role}
            </span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {founder.bio}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
