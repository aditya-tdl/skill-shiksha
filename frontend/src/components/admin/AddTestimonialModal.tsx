"use client";

import { useState } from "react";
import { X, User } from "lucide-react";

interface AddTestimonialModalProps {
    isOpen: boolean;
    onClose: () => void;
    onAdd: (testimonial: any) => Promise<void>;
}

export default function AddTestimonialModal({ isOpen, onClose, onAdd }: AddTestimonialModalProps) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [text, setText] = useState("");
    const [rating, setRating] = useState<number>(5);
    const [avatar, setAvatar] = useState("");

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        try {
            if (!name || !role || !text || !avatar) {
                setError("Please fill in all required fields.");
                setIsSubmitting(false);
                return;
            }

            if (rating < 1 || rating > 5) {
                setError("Rating must be between 1 and 5.");
                setIsSubmitting(false);
                return;
            }

            await onAdd({
                name,
                role,
                text,
                rating: Number(rating),
                avatar
            });

            // Reset form
            setName("");
            setRole("");
            setText("");
            setRating(5);
            setAvatar("");

            onClose();
        } catch (err: any) {
            console.error(err);
            setError(err.response?.data?.message || err.message || "Failed to add testimonial.");
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
                        Add New Testimonial
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
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Student Name *</label>
                            <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="e.g. Ankit Gupta"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Role/Company *</label>
                            <input
                                type="text"
                                required
                                value={role}
                                onChange={(e) => setRole(e.target.value)}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="e.g. Now at TCS Digital"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Rating (1-5) *</label>
                            <input
                                type="number"
                                required
                                min="1"
                                max="5"
                                value={rating}
                                onChange={(e) => setRating(Number(e.target.value))}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                                placeholder="e.g. 5"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Avatar Initials *</label>
                            <input
                                type="text"
                                required
                                maxLength={2}
                                value={avatar}
                                onChange={(e) => setAvatar(e.target.value.toUpperCase())}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary uppercase"
                                placeholder="e.g. AG"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-muted-foreground mb-1">Feedback Text *</label>
                            <textarea
                                required
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                rows={4}
                                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                                placeholder="Their success story and feedback..."
                            />
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
                        {isSubmitting ? 'Adding...' : 'Add Testimonial'}
                    </button>
                </div>
            </form>
        </div>
    );
}
