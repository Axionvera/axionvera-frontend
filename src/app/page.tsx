import { Hero } from "@/components/marketing/Hero";
import { HowItWorks } from "@/components/marketing/HowItWorks";
import { Navbar } from "@/components/marketing/Navbar";
import { Businesses } from "@/components/marketing/Businesses";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Businesses />
    </>
  );
}
