"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionBadge } from "@/components/ui/section-badge";

/**
 * Vision — manifesto section. Long-form quote-like statement.
 * Uses scroll-linked opacity on individual words to create a "reading-along" effect.
 */
export function Vision() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.4"],
  });

  // Split the statement into words for staggered reveal.
  const statement =
    "AI is becoming infrastructure. VectorOS helps people understand and navigate that transformation — building literacy, fluency, and judgment for a world being rewritten by intelligent systems.";
  const words = statement.split(" ");

  return (
    <section
      id="vision"
      ref={ref}
      className="relative border-t border-white/[0.06] py-32 sm:py-48"
    >
      {/* Faint vertical line decoration */}
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/[0.06] to-transparent"
      />

      {/* Faint horizontal markers */}
      <div className="container relative">
        <div className="mx-auto max-w-4xl">
          <div className="flex justify-center">
            <SectionBadge>Vision</SectionBadge>
          </div>

          <p className="mt-14 text-balance text-center text-3xl font-medium leading-[1.25] tracking-[-0.025em] sm:text-4xl md:text-5xl md:leading-[1.18]">
            {words.map((word, i) => (
              <Word
                key={i}
                progress={scrollYProgress}
                index={i}
                total={words.length}
              >
                {word}
              </Word>
            ))}
          </p>

          {/* Signature row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mt-20 flex max-w-md items-center justify-center gap-4"
          >
            <span className="h-px flex-1 bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              joinvectoros.ai
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * Word — single word with scroll-linked opacity.
 * Each word fades in slightly later than the previous as the user scrolls through the section.
 */
function Word({
  children,
  progress,
  index,
  total,
}: {
  children: React.ReactNode;
  progress: any;
  index: number;
  total: number;
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.18, 1]);
  return (
    <>
      <motion.span style={{ opacity }} className="inline-block">
        {children}
      </motion.span>{" "}
    </>
  );
}
