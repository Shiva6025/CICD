"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PipelineSection from "@/components/PipelineSection";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TerminalSection from "@/components/TerminalSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for section animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".section-enter");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen bg-[#030712] overflow-hidden">
      {/* Background orbs */}
      <div className="orb w-96 h-96 bg-indigo-600 top-0 left-0" style={{ animationDelay: "0s" }} />
      <div className="orb w-80 h-80 bg-violet-600 top-1/3 right-0" style={{ animationDelay: "2s" }} />
      <div className="orb w-64 h-64 bg-cyan-600 bottom-1/4 left-1/4" style={{ animationDelay: "4s" }} />

      {/* Grid background */}
      <div className="fixed inset-0 grid-bg pointer-events-none" />

      <Navbar scrolled={scrolled} />
      <HeroSection />
      <PipelineSection />
      <StatsSection />
      <FeaturesSection />
      <TerminalSection />
      <Footer />
    </main>
  );
}
