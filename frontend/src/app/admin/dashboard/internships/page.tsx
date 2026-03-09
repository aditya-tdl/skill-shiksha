"use client";

import { useEffect, useState } from "react";
import { Search, Eye, Trash2, Plus, Edit, Briefcase } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/confirmation-modal";
import { GlobalLoader } from "@/components/ui/global-loader";
import AddInternshipModal from "@/components/admin/AddInternshipModal";
import EditInternshipModal from "@/components/admin/EditInternshipModal";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

type Internship = {
    _id: string;
    title: string;
    description: string;
    badge: string;
    tags: string[];
    duration: string;
    totalSeats?: number;
    seatsLeft: number;
    price: number;
    emiAvailable: boolean;
};

export default function InternshipManagementPage() {
    const [internships, setInternships] = useState<Internship[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    // Modals state
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [internshipToDelete, setInternshipToDelete] = useState<Internship | null>(null);
    const [internshipToEdit, setInternshipToEdit] = useState<Internship | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchInternships = async () => {
        try {
            setLoading(true);
            const data = await apiFetch("/internships");
            setInternships(data.data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchInternships();
    }, []);

    // Reset pagination when searching
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    const handleDeleteClick = (internship: Internship) => {
        setInternshipToDelete(internship);
        setIsDeleteModalOpen(true);
    };

    const handleEditClick = (internship: Internship) => {
        setInternshipToEdit(internship);
        setIsEditModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!internshipToDelete) return;

        setIsDeleting(true);
        try {
            await apiFetch(`/internships/${internshipToDelete._id}`, {
                method: "DELETE"
            });

            // Update local state to remove the internship
            setInternships(internships.filter(s => s._id !== internshipToDelete._id));
            setIsDeleteModalOpen(false);
            setInternshipToDelete(null);

            toast.success(`Program "${internshipToDelete.title}" has been deleted.`);
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to delete internship program");
        } finally {
            setIsDeleting(false);
        }
    };

    const filteredInternships = internships.filter(internship =>
        internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (internship.badge && internship.badge.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredInternships.length / itemsPerPage);
    const paginatedInternships = filteredInternships.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Internship Programs</h1>
                    <p className="mt-1 text-sm text-muted-foreground">Manage and add new internship courses</p>
                </div>

                <div className="flex gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search internships..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg leading-5 bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                    >
                        <Plus className="h-4 w-4" /> Add Program
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
                                    Program Title
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Duration & Info
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Seats (Available / Total)
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8">
                                        <GlobalLoader message="Loading internally..." />
                                    </td>
                                </tr>
                            ) : filteredInternships.length === 0 ? (
                                <tr>
                                    <td colSpan={5} className="px-6 py-12 text-center text-sm text-muted-foreground">
                                        <div className="flex flex-col items-center justify-center">
                                            <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center mb-4">
                                                <Briefcase className="h-6 w-6 text-muted-foreground" />
                                            </div>
                                            <p className="text-base font-medium text-foreground">No internships found</p>
                                            <p className="mt-1">Get started by adding a new internship program.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                paginatedInternships.map((internship) => (
                                    <tr key={internship._id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div>
                                                    <div className="text-sm font-medium text-foreground">{internship.title}</div>
                                                    <div className="text-xs text-muted-foreground mt-1 flex gap-1 items-center">
                                                        {internship.badge && (
                                                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded-full text-[10px] font-bold">
                                                                {internship.badge}
                                                            </span>
                                                        )}
                                                        <span className="truncate max-w-[150px] inline-block" title={internship.tags.join(', ')}>
                                                            {internship.tags.slice(0, 2).join(', ')}
                                                            {internship.tags.length > 2 && '...'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-foreground">{internship.duration}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-bold text-foreground">₹{internship.price.toLocaleString()}</div>
                                            {internship.emiAvailable && (
                                                <div className="text-[10px] text-muted-foreground">EMI Available</div>
                                            )}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${internship.seatsLeft > 0 ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                                                }`}>
                                                {internship.seatsLeft} {internship.totalSeats ? `/ ${internship.totalSeats}` : ''}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end space-x-2">
                                                <button
                                                    onClick={() => handleEditClick(internship)}
                                                    className="text-primary hover:text-primary/80 p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                                                    title="Edit Program"
                                                >
                                                    <Edit className="h-4 w-4" />
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(internship)}
                                                    className="text-destructive hover:text-destructive/80 p-1.5 rounded-md hover:bg-destructive/10 transition-colors"
                                                    title="Delete Program"
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
                                Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredInternships.length)}</span> of <span className="font-medium">{filteredInternships.length}</span> results
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
                title="Delete Program"
                description={`Are you sure you want to delete the "${internshipToDelete?.title}" program? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                isLoading={isDeleting}
            />

            <AddInternshipModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onAdd={async (internshipData) => {
                    try {
                        await apiFetch("/internships", {
                            method: "POST",
                            body: JSON.stringify(internshipData)
                        });

                        toast.success("New program added successfully!");
                        fetchInternships();
                    } catch (err: any) {
                        toast.error(err.message || "Failed to create program");
                        throw err;
                    }
                }}
            />

            <EditInternshipModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                internship={internshipToEdit}
                onEdit={async (id, internshipData) => {
                    try {
                        await apiFetch(`/internships/${id}`, {
                            method: "PUT",
                            body: JSON.stringify(internshipData)
                        });

                        toast.success("Program updated successfully!");
                        fetchInternships();
                    } catch (err: any) {
                        toast.error(err.message || "Failed to update program");
                        throw err;
                    }
                }}
            />
        </div>
    );
}
