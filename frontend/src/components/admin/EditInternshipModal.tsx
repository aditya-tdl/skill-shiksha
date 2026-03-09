"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface EditInternshipModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEdit: (id: string, internship: any) => Promise<void>;
    internship: any | null;
}

export default function EditInternshipModal({ isOpen, onClose, onEdit, internship }: EditInternshipModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [badge, setBadge] = useState("");
    const [tagsInput, setTagsInput] = useState("");
    const [duration, setDuration] = useState("");
    const [totalSeats, setTotalSeats] = useState<number | "">("");
    const [price, setPrice] = useState<number | "">("");
    const [emiAvailable, setEmiAvailable] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Populate form when internship changes
    useEffect(() => {
        if (internship) {
            setTitle(internship.title || "");
            setDescription(internship.description || "");
            setBadge(internship.badge || "");
            setTagsInput(internship.tags ? internship.tags.join(', ') : "");
            setDuration(internship.duration || "");
            setTotalSeats(internship.totalSeats || "");
            setPrice(internship.price ?? "");
            setEmiAvailable(internship.emiAvailable || false);
        }
    }, [internship]);

    if (!isOpen || !internship) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            if (!title || !description || !duration) {
                setError("Title, Description, and Duration are required fields.");
                setIsSubmitting(false);
                return;
            }

            const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== "");

            if (tags.length === 0) {
                setError("An internship must have at least one tag.");
                setIsSubmitting(false);
                return;
            }

            if (totalSeats === "" || Number(totalSeats) < 1) {
                setError("Total Seats must be at least 1.");
                setIsSubmitting(false);
                return;
            }

            if (price === "" || Number(price) < 0) {
                setError("Price cannot be negative.");
                setIsSubmitting(false);
                return;
            }

            await onEdit(internship._id, {
                title,
                description,
                badge: badge || "",
                tags,
                duration,
                totalSeats: Number(totalSeats),
                price: Number(price),
                emiAvailable,
                // Note: seatsLeft might need to be adjusted if totalSeats decreases, 
                // but let's leave it to the backend or maintain current ratio
            });

            onClose();
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Failed to edit internship.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 sm:p-6">
            <form onSubmit={handleSubmit} className="bg-background border border-border rounded-xl shadow-xl w-full max-w-2xl flex flex-col max-h-[85vh]">
                {/* Header - Fixed */}
                <div className="flex items-center justify-between p-5 border-b border-border bg-card shrink-0 rounded-t-xl">
                    <h2 className="text-xl font-bold text-primary">
                        Edit Program
                    </h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-lg hover:bg-muted text-muted-foreground transition-colors"
                        type="button"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Scrollable Form Area */}
                <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar space-y-6">
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-lg text-sm shrink-0">
                            {error}
                        </div>
                    )}

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
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Tags (Comma separated) *</label>
                            <input
                                type="text"
                                required
                                value={tagsInput}
                                onChange={(e) => setTagsInput(e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="e.g. React, Node.js, Next.js"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Description *</label>
                            <textarea
                                required
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                                placeholder="Detailed description of the program curriculum and objectives..."
                            />
                        </div>
                        <div className="md:col-span-2 flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="editEmiAvailable"
                                checked={emiAvailable}
                                onChange={(e) => setEmiAvailable(e.target.checked)}
                                className="w-4 h-4 rounded border-border text-primary focus:ring-primary/50"
                            />
                            <label htmlFor="editEmiAvailable" className="text-sm font-medium text-foreground">
                                EMI Available for this course
                            </label>
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-end gap-3 p-5 border-t border-border bg-card shrink-0 rounded-b-xl">
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
                        {isSubmitting ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
