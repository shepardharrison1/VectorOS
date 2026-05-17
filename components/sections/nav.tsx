"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

/**
 * Nav — fixed top bar. Background fades in as the user scrolls.
 * Logo is the chrome VectorOS V mark from /public/logo.png.
 * "Join Discord" CTA links directly to the Discord invite.
 */
const DISCORD_INVITE = "https://discord.gg/DAnC9eQ56t";

export function Nav() {
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(9,9,9,0)", "rgba(9,9,9,0.6)"]
  );
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  return (
    <motion.header
      style={{ backgroundColor: bg }}
      className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
    >
      <motion.div
        style={{ opacity: borderOpacity }}
        className="absolute inset-x-0 bottom-0 h-px bg-white/10"
      />
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          <NavLink href="#pillars">Pillars</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#community">Community</NavLink>
          <NavLink href="#founders">Founders</NavLink>
          <NavLink href="#vision">Vision</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm">
            <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer">
              Join Discord
            </a>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      {children}
    </a>
  );
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5 group">
      <img
        src="/logo.png"
        alt="VectorOS"
        className="h-7 w-7 object-contain transition-transform duration-500 group-hover:scale-105"
      />
      <span className="text-sm font-medium tracking-tight">
        Vector<span className="text-muted-foreground">OS</span>
      </span>
    </a>
  );
}
