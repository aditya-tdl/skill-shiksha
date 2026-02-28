
import AnimatedHeroSection from "@/components/AnimatedHeroSection";
import StudentFeedback from "@/components/StudentFeedback";
import WhyChooseUs from "@/components/WhyChooseUs";
import FounderStory from "@/components/FounderStory";
import InternshipPrograms from "@/components/InternshipPrograms";

import OfficeGallery from "@/components/OfficeGallery";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import MentorSection from "@/components/MentorSection";
import Testimonials from "@/components/Testimonials";
import PlacementPartners from "@/components/PlacementPartners";
import CTASection from "@/components/CTASection";
import CareerQuiz from "@/components/CareerQuiz";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <AnimatedHeroSection />
      {/* <HeroSection /> */}
      <StudentFeedback />
      <WhyChooseUs />
      <CareerQuiz />
      <InternshipPrograms />
      <ProjectsShowcase />
      <MentorSection />
      <PlacementPartners />
      <Testimonials />
      <FounderStory />
      <OfficeGallery />
      <CTASection />
    </main>
  );
}
