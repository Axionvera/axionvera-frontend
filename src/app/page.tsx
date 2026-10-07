import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Navbar } from "@/components/marketing/Navbar";
import { Businesses } from "@/components/marketing/Businesses";
import { Roles } from "@/components/marketing/Roles";
import { Developers } from "@/components/marketing/Developers";
import { CurrentBuild } from "@/components/marketing/CurrentBuild";
import { About } from "@/components/marketing/About";
import { ClosingCTA } from "@/components/marketing/ClosingCTA";
import { Footer } from "@/components/marketing/Footer";
import { TextMotionController } from "@/components/marketing/TextMotionController";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <TextMotionController />
      <Hero />
      <HowItWorks />
      <Businesses />
      <Roles />
      <Developers />
      <CurrentBuild />
      <About />
      <ClosingCTA />
      <Footer />
    </>
  );
}
