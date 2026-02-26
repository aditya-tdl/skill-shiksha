import ProjectsShowcase from "@/components/ProjectsShowcase";

export const metadata = {
    title: "Projects | Skill Shiksha",
    description: "Explore the amazing projects built by our students.",
};

export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <ProjectsShowcase />
        </div>
    );
}
