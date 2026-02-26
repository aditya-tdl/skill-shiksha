import OfficeGallery from "@/components/OfficeGallery";

export const metadata = {
    title: "Office | Skill Shiksha",
    description: "Take a look at the inspiring workplace and environment at Skill Shiksha.",
};

export default function OfficePage() {
    return (
        <div className="min-h-screen bg-background pt-24 pb-16">
            <OfficeGallery />
        </div>
    );
}
