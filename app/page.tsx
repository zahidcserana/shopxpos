import Header from "@/components/Header";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import Facebook from "@/sections/Facebook";
import Dashboard from "@/sections/Dashboard";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import FAQ from "@/sections/FAQ";
import CTA from "@/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Facebook />
      <HowItWorks />
      <Dashboard />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
