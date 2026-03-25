"use client";

import { useEffect, useState } from "react";
import { Search, Eye, Trash2, RefreshCw, Download, Check, X } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/confirmation-modal";
import { GlobalLoader } from "@/components/ui/global-loader";
import { apiFetch } from "@/lib/api";
import { toast } from "sonner";

type Admission = {
    _id: string;
    name: string;
    email: string;
    phone: string;
    program: string;
    status: string;
    connect_status?: string;
    createdAt: string;
};

export default function StudentManagementPage() {
    const [students, setStudents] = useState<Admission[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);

    // Modal state
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [studentToDelete, setStudentToDelete] = useState<Admission | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);

    // Status update state
    const [statusChanges, setStatusChanges] = useState<Record<string, string>>({});
    const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

    const fetchAdmissions = async () => {
        try {
            setLoading(true);
            const data = await apiFetch("/admission");
            setStudents(data.data || []);
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchAdmissions();
    }, []);

    // Reset pagination when searching or changing page size
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, itemsPerPage]);

    const handleDeleteClick = (student: Admission) => {
        setStudentToDelete(student);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (!studentToDelete) return;

        setIsDeleting(true);
        try {
            await apiFetch(`/admission/${studentToDelete._id}`, {
                method: "DELETE"
            });

            // Update local state to remove the student
            setStudents(students.filter(s => s._id !== studentToDelete._id));
            setIsDeleteModalOpen(false);
            setStudentToDelete(null);

            toast.success(`Application for ${studentToDelete.name} has been deleted successfully.`);
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to delete student application");
        } finally {
            setIsDeleting(false);
        }
    };

    const handleStatusLocalChange = (id: string, newStatus: string) => {
        setStatusChanges(prev => ({ ...prev, [id]: newStatus }));
    };

    const cancelStatusChange = (id: string) => {
        setStatusChanges(prev => {
            const next = { ...prev };
            delete next[id];
            return next;
        });
    };

    const confirmStatusUpdate = async (id: string) => {
        const newStatus = statusChanges[id];
        if (!newStatus) return;

        setUpdatingStatusId(id);
        try {
            await apiFetch(`/admission/${id}/connect-status`, {
                method: "PATCH",
                body: JSON.stringify({ connect_status: newStatus })
            });

            // Update local state
            setStudents(prev => prev.map(s => s._id === id ? { ...s, connect_status: newStatus } : s));

            // Clear local change state
            cancelStatusChange(id);
            toast.success("Connection status updated successfully!");
        } catch (err: any) {
            console.error(err);
            toast.error(err.message || "Failed to update status");
        } finally {
            setUpdatingStatusId(null);
        }
    };

    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.phone.includes(searchTerm)
    );

    const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
    const paginatedStudents = filteredStudents.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handleDownloadCSV = () => {
        if (filteredStudents.length === 0) {
            toast.error("No data to download");
            return;
        }

        const headers = ["Name", "Email", "Phone", "Program", "Profession", "Connect Status", "Date"];
        const csvRows = [
            headers.join(","),
            ...filteredStudents.map(student => [
                `"${student.name.replace(/"/g, '""')}"`,
                `"${student.email.replace(/"/g, '""')}"`,
                `"${student.phone.replace(/"/g, '""')}"`,
                `"${student.program.replace(/"/g, '""')}"`,
                `"${student.status.replace(/"/g, '""')}"`,
                `"${(student.connect_status || "pending").replace(/"/g, '""')}"`,
                `"${new Date(student.createdAt).toLocaleDateString()}"`
            ].join(","))
        ];

        const blob = new Blob([csvRows.join("\n")], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `students_${new Date().toISOString().split('T')[0]}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("Download started!");
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-foreground">Student Management</h1>
                    <p className="mt-1 text-sm text-muted-foreground">View and manage all admission applications</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-4 w-4 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search students..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="block w-full pl-10 pr-3 py-2 border border-border rounded-lg leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm"
                        />
                    </div>
                    <div className="flex gap-2 w-full sm:w-auto justify-end">
                        <button
                            onClick={fetchAdmissions}
                            disabled={loading}
                            className="flex items-center justify-center p-2 bg-background border border-border rounded-lg hover:bg-muted/50 transition-colors disabled:opacity-50"
                            title="Refresh"
                        >
                            <RefreshCw className={`h-5 w-5 ${loading ? 'animate-spin text-muted-foreground' : 'text-foreground'}`} />
                        </button>
                        <button
                            onClick={handleDownloadCSV}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                            title="Download CSV"
                        >
                            <Download className="h-4 w-4" />
                            <span className="hidden sm:inline">Export</span>
                        </button>
                    </div>
                </div>
            </div>

            {error && (
                <div className="bg-red-50 text-red-500 p-4 rounded-lg">
                    {error}
                </div>
            )}

            <div className="bg-card shadow-sm rounded-xl border border-border overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-border">
                        <thead className="bg-muted/50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Contact Info
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Program
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Profession
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Connect Status
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-card divide-y divide-border">
                            {loading ? (
                                <tr>
                                    <td colSpan={7} className="px-6 py-8">
                                        <GlobalLoader message="Loading students..." />
                                    </td>
                                </tr>
                            ) : filteredStudents.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-8 text-center text-sm text-gray-500 dark:text-gray-400">
                                        No students found.
                                    </td>
                                </tr>
                            ) : (
                                paginatedStudents.map((student) => (
                                    <tr key={student._id} className="hover:bg-muted/50 transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm font-medium text-foreground">{student.name}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="text-sm text-foreground">{student.email}</div>
                                            <div className="text-sm text-muted-foreground">{student.phone}</div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                {student.program}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="text-sm text-foreground">
                                                {student.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {(() => {
                                                const currentVal = statusChanges[student._id] || student.connect_status || "pending";
                                                const cStatus = currentVal.toLowerCase();
                                                const isChanged = statusChanges[student._id] && statusChanges[student._id] !== (student.connect_status || "pending");

                                                return (
                                                    <div className="flex items-center gap-2">
                                                        <div className={`flex items-center px-2 py-0.5 rounded-full border border-transparent transition-all ${cStatus === 'joined' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                                                                cStatus === 'pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                                                                    cStatus === 'contacted' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                                                                        'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200'
                                                            }`}>
                                                            <select
                                                                className="bg-transparent text-xs font-semibold focus:outline-none cursor-pointer pr-1 appearance-none"
                                                                value={currentVal}
                                                                onChange={(e) => handleStatusLocalChange(student._id, e.target.value)}
                                                                disabled={updatingStatusId === student._id}
                                                            >
                                                                <option value="pending">Pending</option>
                                                                <option value="contacted">Contacted</option>
                                                                <option value="joined">Joined</option>
                                                            </select>
                                                        </div>

                                                        {isChanged && (
                                                            <div className="flex items-center gap-1 animation-fade-in bg-card border border-border rounded-md px-1 shadow-sm">
                                                                <button
                                                                    onClick={() => confirmStatusUpdate(student._id)}
                                                                    disabled={updatingStatusId === student._id}
                                                                    className="text-green-600 hover:text-green-700 p-1 transition-all active:scale-90"
                                                                    title="Save Changes"
                                                                >
                                                                    {updatingStatusId === student._id ? (
                                                                        <RefreshCw className="h-3 w-3 animate-spin" />
                                                                    ) : (
                                                                        <Check className="h-3 w-3 stroke-[3]" />
                                                                    )}
                                                                </button>
                                                                <button
                                                                    onClick={() => cancelStatusChange(student._id)}
                                                                    disabled={updatingStatusId === student._id}
                                                                    className="text-red-600 hover:text-red-700 p-1 transition-all active:scale-90"
                                                                    title="Cancel"
                                                                >
                                                                    <X className="h-3 w-3 stroke-[3]" />
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                );
                                            })()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                                            {new Date(student.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <div className="flex justify-end items-center gap-2">
                                                {/* <button
                                                    
                                                    className="text-primary hover:text-primary/80 p-1.5 rounded-md hover:bg-primary/10 transition-colors"
                                                    title="View Details"
                                                >
                                                    <Eye className="h-4 w-4" />
                                                </button> */}
                                                <button
                                                    onClick={() => handleDeleteClick(student)}
                                                    className="text-destructive hover:text-destructive/80 p-1.5 rounded-md hover:bg-destructive/10 transition-colors"
                                                    title="Delete Application"
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
                    {(filteredStudents.length > 0) && (
                        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-border bg-muted/20 gap-4">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                    <span className="mr-2">Rows per page:</span>
                                    <select
                                        value={itemsPerPage}
                                        onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                        className="bg-background border border-border rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                                    >
                                        {[10, 20, 30, 50, 100].map(size => (
                                            <option key={size} value={size}>{size}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="whitespace-nowrap">
                                    Showing <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to <span className="font-medium">{Math.min(currentPage * itemsPerPage, filteredStudents.length)}</span> of <span className="font-medium">{filteredStudents.length}</span> results
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                                <button
                                    onClick={() => setCurrentPage(1)}
                                    disabled={currentPage === 1}
                                    className="px-2 sm:px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors hidden sm:block"
                                >
                                    First
                                </button>
                                <button
                                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                    disabled={currentPage === 1}
                                    className="px-2 sm:px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
                                >
                                    Prev
                                </button>

                                {/* Page Numbers */}
                                <div className="flex items-center gap-1 mx-1 sm:mx-2">
                                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                                        let pageNum;
                                        if (totalPages <= 5) {
                                            pageNum = i + 1;
                                        } else if (currentPage <= 3) {
                                            pageNum = i + 1;
                                        } else if (currentPage >= totalPages - 2) {
                                            pageNum = totalPages - 4 + i;
                                        } else {
                                            pageNum = currentPage - 2 + i;
                                        }

                                        return (
                                            <button
                                                key={pageNum}
                                                onClick={() => setCurrentPage(pageNum)}
                                                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm font-medium transition-colors ${currentPage === pageNum
                                                        ? 'bg-primary text-primary-foreground'
                                                        : 'bg-background border border-border hover:bg-muted/80'
                                                    }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    })}
                                </div>

                                <button
                                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                    disabled={currentPage === totalPages || totalPages === 0}
                                    className="px-2 sm:px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors"
                                >
                                    Next
                                </button>
                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    disabled={currentPage === totalPages || totalPages === 0}
                                    className="px-2 sm:px-3 py-1 bg-background border border-border rounded-md text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted/80 transition-colors hidden sm:block"
                                >
                                    Last
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
                title="Delete Application"
                description={`Are you sure you want to delete the admission application for ${studentToDelete?.name}? This action cannot be undone.`}
                confirmText="Delete"
                cancelText="Cancel"
                type="danger"
                isLoading={isDeleting}
            />
        </div>
    );
}
