"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/**
 * Footer — newsletter signup, real Discord link, real email, big wordmark.
 * Social links removed for v1 — will be added when real accounts exist.
 */
const DISCORD_INVITE = "https://discord.gg/DAnC9eQ56t";
const CONTACT_EMAIL = "vectoros.team@gmail.com";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06]">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_100%,black_30%,transparent_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent"
      />

      <div className="container relative">
        {/* Newsletter row */}
        <div className="grid gap-12 py-16 md:grid-cols-2 md:gap-8 md:py-24">
          <div className="max-w-md">
            <h3 className="text-balance text-3xl font-medium tracking-[-0.025em] sm:text-4xl">
              Subscribe to the <span className="text-gradient">Signal</span>.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Occasional notes on AI, systems, and digital leverage from the
              VectorOS founders. Long enough to be useful, short enough to read.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement)?.value;
                if (email) {
                  // For v1: opens an email draft. Replace with a real provider (Beehiiv / ConvertKit / Resend) later.
                  window.location.href = `mailto:${CONTACT_EMAIL}?subject=Newsletter signup&body=Please add ${email} to the VectorOS newsletter.`;
                }
              }}
              className="flex flex-col gap-2 sm:flex-row"
            >
              <Input
                type="email"
                name="email"
                placeholder="you@domain.com"
                required
                className="sm:flex-1"
              />
              <Button type="submit" className="group">
                Subscribe
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Button>
            </form>
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="h-px hairline" />

        {/* Link columns */}
        <div className="grid gap-10 py-14 md:grid-cols-4">
          <div className="md:col-span-1">
            <FooterLogo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              A student-founded nonprofit teaching AI literacy and systems
              thinking. Lakewood Ranch, Florida.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <SocialLink href={DISCORD_INVITE} label="Discord" external>
                <DiscordIcon />
              </SocialLink>
              <SocialLink href={`mailto:${CONTACT_EMAIL}`} label="Email">
                <Mail className="h-3.5 w-3.5" />
              </SocialLink>
            </div>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {CONTACT_EMAIL}
            </p>
          </div>

          <FooterCol
            title="Learn"
            links={[
              { label: "AI Tools", href: "#pillars" },
              { label: "Systems Thinking", href: "#pillars" },
              { label: "Tech Literacy", href: "#pillars" },
              { label: "Workflows", href: "#pillars" },
              { label: "Philosophy", href: "#pillars" },
            ]}
          />
          <FooterCol
            title="Community"
            links={[
              { label: "Discord", href: DISCORD_INVITE, external: true },
              { label: "Workshops", href: "#community" },
              { label: "Service Hours", href: "#community" },
              { label: "Founders", href: "#founders" },
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              { label: "Email Us", href: `mailto:${CONTACT_EMAIL}` },
              { label: "Vision", href: "#vision" },
            ]}
          />
        </div>

        <div className="h-px hairline" />

        <BigWordmark />

        <div className="flex flex-col items-center justify-between gap-3 pb-10 pt-6 sm:flex-row">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            © 2026 VectorOS · joinvectoros.ai
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            501(c)(3) status pending
          </div>
        </div>
      </div>
    </footer>
  );
}

/* --- helpers --- */

type FooterLink = { label: string; href: string; external?: boolean };

function FooterCol({ title, links }: { title: string; links: FooterLink[] }) {
  return (
    <div>
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {title}
      </h4>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <img
        src="/logo.png"
        alt="VectorOS"
        className="h-7 w-7 object-contain"
      />
      <span className="text-sm font-medium tracking-tight">
        Vector<span className="text-muted-foreground">OS</span>
      </span>
    </div>
  );
}

function SocialLink({
  href,
  label,
  children,
  external = false,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-muted-foreground transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-foreground"
    >
      {children}
    </a>
  );
}

function BigWordmark() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2 }}
      className="no-select select-none py-10 sm:py-14"
    >
      <div className="relative">
        <div
          className="text-center text-[18vw] font-medium leading-none tracking-[-0.06em] sm:text-[15vw]"
          style={{
            background:
              "linear-gradient(180deg, hsla(0,0%,100%,0.12) 0%, hsla(0,0%,100%,0.02) 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VectorOS
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px -translate-y-1/2 hairline opacity-50" />
      </div>
    </motion.div>
  );
}

function DiscordIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
