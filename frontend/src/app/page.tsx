import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderStory from "@/components/FounderStory";
import InternshipPrograms from "@/components/InternshipPrograms";

import OfficeGallery from "@/components/OfficeGallery";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import MentorSection from "@/components/MentorSection";
import Testimonials from "@/components/Testimonials";
import PlacementPartners from "@/components/PlacementPartners";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <WhyChooseUs />
      <FounderStory />
      <InternshipPrograms />

      <OfficeGallery />
      <ProjectsShowcase />
      <MentorSection />
      <Testimonials />
      <PlacementPartners />
      <CTASection />
    </main>
  );
}
