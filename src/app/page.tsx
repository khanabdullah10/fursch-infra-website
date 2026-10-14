import React from "react";
import { HeroDoorsScroll } from "@/components/home/HeroDoorsScroll";
import { HeroSection } from "@/components/home/HeroSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { ProjectsGallerySection } from "@/components/home/ProjectsGallerySection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FromDrawingToDetail } from "@/components/home/FromDrawingToDetail";
import { DeliveryApproachSection } from "@/components/home/DeliveryApproachSection";
import { SectorsSection } from "@/components/home/SectorsSection";
import { TeamSection } from "@/components/home/TeamSection";
import { QuickEnquirySection } from "@/components/home/QuickEnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Pure, Unobstructed Architectural Doors Scroll Sequence (Clean: zero text on photo) */}
      <HeroDoorsScroll />

      {/* 2. Interactive Architectural Canvas Graph Section & Editorial Positioning */}
      <HeroSection />

      {/* 3. Client Credibility Grid (DLF, L&T, Tata Projects, J. Kumar, CIDCO) */}
      <ClientsSection />

      {/* 4. Selected Work & Case Studies */}
      <ProjectsGallerySection />

      {/* 5. The 7 Core Documented Contracting Capabilities */}
      <ExpertiseSection />

      {/* 6. Signature Motion Sequence: From Drawing to Detail */}
      <FromDrawingToDetail />

      {/* 7. Delivery Approach (One Partner. Clear Accountability.) */}
      <DeliveryApproachSection />

      {/* 8. Sectors (Residential, Commercial, Hospitality, Infrastructure) */}
      <SectorsSection />

      {/* 9. People & Quality (The People Behind the Precision) */}
      <TeamSection />

      {/* 10. Closing Enquiry Form & Drawing Submission */}
      <QuickEnquirySection />
    </>
  );
}
