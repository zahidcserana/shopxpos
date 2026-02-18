import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Dashboard from "@/sections/Dashboard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
