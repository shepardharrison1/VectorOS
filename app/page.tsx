import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Resources } from "@/components/sections/resources";
import { Community } from "@/components/sections/community";
import { Founders } from "@/components/sections/founders";
import { Vision } from "@/components/sections/vision";
import { Footer } from "@/components/sections/footer";

/**
 * VectorOS Homepage
 * --------------------------------
 * 1. Nav         — fixed glass top bar (logo + Join Discord CTA)
 * 2. Hero        — headline + Discord CTA + system background
 * 3. Pillars     — 5 content pillars (interactive cards)
 * 4. Resources   — library, all marked "Coming soon" at v1
 * 5. Community   — workshops / discord / service hours
 * 6. Founders    — Harrison + Davis, Lakewood Ranch FL
 * 7. Vision      — manifesto with scroll-linked text reveal
 * 8. Footer      — newsletter, Discord link, email, 501(c)(3) status
 */
export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Pillars />
      <Resources />
      <Community />
      <Founders />
      <Vision />
      <Footer />
    </main>
  );
}
