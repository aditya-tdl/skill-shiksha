"use client";

import { useState } from "react";
import { X, Search } from "lucide-react";

interface AddInternshipModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (internship: any) => Promise<void>;
}

export default function AddInternshipModal({ isOpen, onClose, onAdd }: AddInternshipModalProps) {
    const [title, setTitle] = useState("");
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [type, setType] = useState("Remote");
    const [stipend, setStipend] = useState("");
    const [duration, setDuration] = useState("");
    const [totalSeats, setTotalSeats] = useState<number | "">("");
    const [price, setPrice] = useState<number | "">("");
    const [emiAvailable, setEmiAvailable] = useState(false);
    const [badge, setBadge] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            if (!title || !company || !location || !duration) {
                setError("Please fill in all required fields.");
                setIsSubmitting(false);
                return;
            }

            if (totalSeats === "" || price === "") {
                setError("Total Seats and Price are required.");
                setIsSubmitting(false);
                return;
            }

            const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== "");

            await onAdd({
                title,
                company,
                location,
                type,
                stipend,
                duration,
                totalSeats: Number(totalSeats),
                seatsLeft: Number(totalSeats), // Initial seats left is total seats
                price: Number(price),
                emiAvailable,
                badge: badge || undefined,
                tags,
                description,
                image: imageUrl || "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1470&auto=format&fit=crop",
                featured: false
            });

            // Reset form
            setTitle("");
            setCompany("");
            setLocation("");
            setType("Remote");
            setStipend("");
            setDuration("");
            setTotalSeats("");
            setPrice("");
            setEmiAvailable(false);
            setBadge("");
            setTagsInput("");
            setDescription("");
            setImageUrl("");

            onClose();
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Failed to add internship.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-background border border-border rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-background z-10">
                    <h2 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Add New Internship
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                <div className="p-6">
                    {error && (
                        <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Important Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Title *</label>
                                <input
                                    type="text"
                                    required
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. Frontend Developer"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Company *</label>
                                <input
                                    type="text"
                                    required
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. TechDock Labs"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Location *</label>
                                <input
                                    type="text"
                                    required
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. Noida, UP"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Duration *</label>
                                <input
                                    type="text"
                                    required
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. 6 Months"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Total Seats *</label>
                                <input
                                    type="number"
                                    required
                                    min="1"
                                    value={totalSeats}
                                    onChange={(e) => setTotalSeats(e.target.value ? Number(e.target.value) : "")}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. 50"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Price (₹) *</label>
                                <input
                                    type="number"
                                    required
                                    min="0"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value ? Number(e.target.value) : "")}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. 4999"
                                />
                            </div>
                        </div>

                        {/* Other Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Type</label>
                                <select
                                    value={type}
                                    onChange={(e) => setType(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                >
                                    <option value="Remote">Remote</option>
                                    <option value="On-site">On-site</option>
                                    <option value="Hybrid">Hybrid</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Stipend</label>
                                <input
                                    type="text"
                                    value={stipend}
                                    onChange={(e) => setStipend(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. ₹5,000 - ₹10,000/month"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Badge (Optional)</label>
                                <input
                                    type="text"
                                    value={badge}
                                    onChange={(e) => setBadge(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. Featured, Hot"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Tags (Comma separated)</label>
                                <input
                                    type="text"
                                    value={tagsInput}
                                    onChange={(e) => setTagsInput(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="e.g. React, Node.js, Next.js"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Image URL (Optional)</label>
                                <input
                                    type="url"
                                    value={imageUrl}
                                    onChange={(e) => setImageUrl(e.target.value)}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-muted-foreground mb-1">Description (Optional)</label>
                                <textarea
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    rows={3}
                                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                                    placeholder="Brief description of the internship role..."
                                />
                            </div>
                            <div className="md:col-span-2 flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="emiAvailable"
                                    checked={emiAvailable}
                                    onChange={(e) => setEmiAvailable(e.target.checked)}
                                    className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50"
                                />
                                <label htmlFor="emiAvailable" className="text-sm font-medium text-foreground">
                                    EMI Available for this course
                                </label>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-border">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={isSubmitting}
                                className="px-4 py-2 border border-border rounded-lg hover:bg-muted text-foreground transition-colors disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors disabled:opacity-50 flex items-center gap-2"
                            >
                                {isSubmitting ? 'Adding...' : 'Add Internship'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
