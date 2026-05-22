import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { Pillars } from "@/components/sections/pillars";
import { Community } from "@/components/sections/community";
import { Founders } from "@/components/sections/founders";
import { Vision } from "@/components/sections/vision";
import { Footer } from "@/components/sections/footer";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Pillars />
      <Community />
      <Founders />
      <Vision />
      <Footer />
    </main>
  );
}
