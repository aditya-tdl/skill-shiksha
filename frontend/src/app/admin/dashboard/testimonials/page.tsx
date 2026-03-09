"use client";

import { useEffect, useState } from "react";
import { Search, Trash2, Plus, Edit, MessageSquare, Star } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/confirmation-modal";
import { GlobalLoader } from "@/components/ui/global-loader";
import AddTestimonialModal from "@/components/admin/AddTestimonialModal";
import EditTestimonialModal from "@/components/admin/EditTestimonialModal";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

type Testimonial = {
    _id: string;
    name: string;
    role: string;
    text: string;
    rating: number;
    avatar: string;
    createdAt?: string;
};

export default function TestimonialManagementPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Modals state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const [testimonialToEdit, setTestimonialToEdit] = useState<Testimonial | null>(null);
    const [testimonialToDelete, setTestimonialToDelete] = useState<Testimonial | null>(null);

    const [isDeleting, setIsDeleting] = useState(false);

    const fetchTestimonials = async () => {
        try {
            setLoading(true);
            const data = await apiFetch("/testimonials");
            setTestimonials(data.data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTestimonials();
    }, []);

    // Reset pagination when searching
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const handleEditClick = (testimonial: Testimonial) => {
        setTestimonialToEdit(testimonial);
        setIsEditModalOpen(true);
    };

    const handleDeleteClick = (testimonial: Testimonial) => {
        setTestimonialToDelete(testimonial);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!testimonialToDelete) return;

        setIsDeleting(true);
        try {
            await apiFetch(`/testimonials/${testimonialToDelete._id}`, {
                method: "DELETE"
            });

            // Update local state
            setTestimonials(testimonials.filter(t => t._id !== testimonialToDelete._id));
            setIsDeleteModalOpen(false);
            setTestimonialToDelete(null);

            toast.success(`Testimonial by "${testimonialToDelete.name}" has been deleted.`);
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to delete testimonial");
        } finally {
            setIsDeleting(false);
        }
    };

    const filteredTestimonials = testimonials.filter(testimonial =>
        testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.text.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredTestimonials.length / itemsPerPage);
    const paginatedTestimonials = filteredTestimonials.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Testimonials</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Manage student success stories and feedback</p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search testimonials..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg leading-5 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                    >
                        <Plus className="h-4 w-4" /> Add Testimonial
                    </button>
                </div>
            </div>

            {error && (
                <div className="bg-destructive/10 text-destructive p-4 rounded-lg">
                    {error}
                </div>
            )}

            <div className="bg-card shadow-sm rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                        <thead className="bg-muted/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Student
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Feedback
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Rating
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-8">
                                        <GlobalLoader message="Loading testimonials..." />
                                    </td>
                                </tr>
                            ) : filteredTestimonials.length === 0 ? (
                                <tr>
                                    <td colSpan={4} className="px-6 py-12 text-center text-sm text-muted-foreground">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                                <MessageSquare className="h-6 w-6 text-muted-foreground" />
                                            </div>
                                            <p className="text-base font-medium text-foreground">No testimonials found</p>
                                            <p className="mt-1">Get started by adding a new student feedback.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedTestimonials.map((testimonial) => (
                                    <tr key={testimonial._id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="flex-shrink-0 h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                                                    {testimonial.avatar}
                                                </div>
                                                <div className="ml-4">
                                                    <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                                                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs lg:max-w-md">
                                            <p className="text-sm text-foreground whitespace-normal break-words leading-relaxed text-left">
                                                "{testimonial.text}"
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex text-yellow-500">
                                                {Array.from({ length: testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 fill-current" />
                                                ))}
                                                {Array.from({ length: 5 - testimonial.rating }).map((_, i) => (
                                                    <Star key={i} className="h-4 w-4 text-muted border-none text-muted-foreground opacity-20" />
                                                ))}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleEditClick(testimonial)}
                                                    className="text-primary hover:text-primary/80 p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                                                    title="Edit Testimonial"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(testimonial)}
                                                    className="text-destructive hover:text-destructive/80 p-1.5 rounded-md hover:bg-destructive/10 transition-colors"
                                                    title="Delete Testimonial"
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="flex items-center justify-between px-6 py-3 border-t border-border bg-muted/20">
                            <div className="text-sm text-muted-foreground">
                                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredTestimonials.length)}</span> of <span className="font-medium">{filteredTestimonials.length}</span> results
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
                                >
                                    Previous
                                </button>
                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages}
                                    className="px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Delete Testimonial"
                description={`Are you sure you want to delete the testimonial from "${testimonialToDelete?.name}"? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                isLoading={isDeleting}
            />

            <AddTestimonialModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={async (testimonialData) => {
                    try {
                        await apiFetch("/testimonials", {
                            method: "POST",
                            body: JSON.stringify(testimonialData)
                        });

                        toast.success("New testimonial added successfully!");
                        fetchTestimonials();
                    } catch (err: any) {
                        toast.error(err.message || "Failed to create testimonial");
                        throw err;
                    }
                }}
            />

            <EditTestimonialModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                testimonial={testimonialToEdit}
                onEdit={async (id, testimonialData) => {
                    try {
                        await apiFetch(`/testimonials/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(testimonialData)
                        });

                        toast.success("Testimonial updated successfully!");
                        fetchTestimonials();
                    } catch (err: any) {
                        toast.error(err.message || "Failed to update testimonial");
                        throw err;
                    }
                }}
            />
        </div>
    );
}
