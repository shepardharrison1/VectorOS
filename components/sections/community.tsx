"use client";

import { motion } from "framer-motion";
import { Calendar, MessagesSquare, GraduationCap, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionBadge } from "@/components/ui/section-badge";

/**
 * Community — workshops, discord, learning sessions, collaborative projects.
 * All meta strings reflect honest day-one stage (no fake member counts).
 * Primary CTA wired to the real Discord invite.
 */
const DISCORD_INVITE = "https://discord.gg/DAnC9eQ56t";

const ITEMS = [
  {
    title: "Workshops",
    description:
      "Hands-on sessions on AI tools, workflows, and systems design — taught by students, open to students.",
    meta: "Launching summer 2026",
    Icon: Calendar,
  },
  {
    title: "Discord Community",
    description:
      "Where members share what they're building, learning, and questioning. This is the front door.",
    meta: "Now open",
    Icon: MessagesSquare,
  },
  {
    title: "Learning Sessions",
    description:
      "Cohort-based deep dives — small groups, real material, real questions.",
    meta: "First cohort forming",
    Icon: GraduationCap,
  },
  {
    title: "Service Hours",
    description:
      "Members who contribute — teaching peers, writing resources, moderating, organizing — can earn verified community service hours via MobileServe.",
    meta: "MobileServe verified",
    Icon: Users,
  },
];

export function Community() {
  return (
    <section
      id="community"
      className="relative border-t border-white/[0.06] py-28 sm:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(0,0%,100%,0.025), transparent 70%)",
        }}
      />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <SectionBadge>The Network</SectionBadge>
          <h2 className="mt-6 text-balance text-4xl font-medium tracking-[-0.03em] sm:text-5xl">
            A community that{" "}
            <span className="text-gradient">thinks in systems.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-balance text-muted-foreground">
            VectorOS isn't a course — it's a living network of students learning
            together. Workshops, conversations, and projects that compound.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.015] sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <CommunityCell key={item.title} {...item} delay={i * 0.08} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg" className="group">
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
              Join the Discord
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function CommunityCell({
  title,
  description,
  meta,
  Icon,
  delay,
}: {
  title: string;
  description: string;
  meta: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden bg-background p-8 transition-colors duration-500 hover:bg-white/[0.02]"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/0 to-transparent transition-all duration-500 group-hover:via-white/30" />

      <div className="flex items-start justify-between">
        <Icon
          className="h-6 w-6 text-foreground/80 transition-transform duration-500 group-hover:scale-110"
          strokeWidth={1.25}
        />
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {meta}
        </span>
      </div>

      <h3 className="mt-10 text-lg font-medium tracking-tight">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </motion.div>
  );
}
