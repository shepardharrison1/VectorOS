"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedGrid } from "@/components/effects/animated-grid";
import { VectorField } from "@/components/effects/vector-field";
import { SystemNodes } from "@/components/effects/system-nodes";

/**
 * Hero — marquee section.
 * Layered backgrounds: animated grid → vector field → system nodes → soft gradient.
 * Primary CTA links to Discord. Status chip reflects real day-one stage.
 */
const DISCORD_INVITE = "https://discord.gg/DAnC9eQ56t";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28">
      {/* Background stack */}
      <AnimatedGrid className="z-0" />
      <VectorField className="absolute inset-0 z-0 opacity-60" density={14} />
      <SystemNodes className="absolute inset-0 z-0 opacity-70" />

      {/* Soft top-down light spill */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 z-0 h-[500px]"
        style={{
          background:
            "radial-gradient(ellipse 50% 60% at 50% 0%, hsla(0,0%,100%,0.08), transparent 70%)",
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-32 bg-gradient-to-b from-transparent to-background"
      />

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          {/* Status chip — honest day-one framing */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] py-1 pl-1.5 pr-4 text-xs"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/[0.05] px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] text-foreground/90">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              Live
            </span>
            <span className="text-muted-foreground">
              Building in public — Lakewood Ranch, FL
            </span>
          </motion.div>

          {/* Headline — staggered word reveal */}
          <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[88px]">
            <Stagger delay={0.1}>Understanding</Stagger>{" "}
            <Stagger delay={0.18} gradient>
              AI,
            </Stagger>{" "}
            <Stagger delay={0.26}>Systems,</Stagger>
            <br className="hidden sm:block" />{" "}
            <Stagger delay={0.34}>and</Stagger>{" "}
            <Stagger delay={0.42} gradient>
              Digital Leverage.
            </Stagger>
          </h1>

          {/* Subheadline — by students, for students */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-8 max-w-2xl text-balance text-base text-muted-foreground sm:text-lg"
          >
            VectorOS is a student-founded nonprofit teaching AI literacy,
            systems thinking, and practical workflows for the infrastructure age.
            Built by students, for students — and anyone curious about
            navigating what comes next.
          </motion.p>

          {/* CTAs — primary goes to Discord */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild size="lg" className="group min-w-[180px]">
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Discord
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="group min-w-[180px]"
            >
              <a href="#pillars">
                Explore the Mission
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stagger({
  children,
  delay = 0,
  gradient = false,
}: {
  children: React.ReactNode;
  delay?: number;
  gradient?: boolean;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-block ${gradient ? "text-gradient" : ""}`}
    >
      {children}
    </motion.span>
  );
}
