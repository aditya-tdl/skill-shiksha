import Testimonials from "@/components/Testimonials";

export const metadata = {
    title: "Testimonials | Skill Shiksha",
    description: "Read success stories and testimonials from our students.",
};

export default function TestimonialsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <Testimonials />
        </div>
    );
}
