"use client";

import { AlertTriangle, LogOut, Trash2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    type?: "danger" | "warning" | "logout";
    isLoading?: boolean;
}

export function ConfirmationModal({
    isOpen,
    onClose,
    onConfirm,
    title,
    description,
    confirmText = "Confirm",
    cancelText = "Cancel",
    type = "warning",
    isLoading = false,
}: ConfirmationModalProps) {

    // Define styles and icons based on type
    const getTypeStyles = () => {
        switch (type) {
            case "danger":
                return {
                    icon: <Trash2 className="h-6 w-6 text-red-600" />,
                    bgClass: "bg-red-100 dark:bg-red-900/30",
                    btnClass: "bg-red-600 hover:bg-red-700 focus:ring-red-500 text-white",
                };
            case "logout":
                return {
                    icon: <LogOut className="h-6 w-6 text-orange-600" />,
                    bgClass: "bg-orange-100 dark:bg-orange-900/30",
                    btnClass: "bg-orange-600 hover:bg-orange-700 focus:ring-orange-500 text-white",
                };
            case "warning":
            default:
                return {
                    icon: <AlertTriangle className="h-6 w-6 text-yellow-600" />,
                    bgClass: "bg-yellow-100 dark:bg-yellow-900/30",
                    btnClass: "bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500 text-white",
                };
        }
    };

    const styles = getTypeStyles();

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="flex flex-col items-center sm:items-start sm:flex-row gap-4 mb-2">
                    <div className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0 sm:h-10 sm:w-10 ${styles.bgClass}`}>
                        {styles.icon}
                    </div>
                    <div className="text-center sm:text-left">
                        <DialogTitle className="text-lg font-semibold leading-6 text-foreground">
                            {title}
                        </DialogTitle>
                    </div>
                </DialogHeader>
                <div className="py-2">
                    <DialogDescription className="text-sm text-muted-foreground text-center sm:text-left sm:pl-14">
                        {description}
                    </DialogDescription>
                </div>
                <DialogFooter className="mt-4 sm:space-x-2 gap-2 sm:gap-0">
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md border border-border bg-card px-4 py-2 text-base font-medium text-card-foreground shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm transition-colors disabled:opacity-50"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        {cancelText}
                    </button>
                    <button
                        type="button"
                        className={`inline-flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm transition-colors disabled:opacity-50 ${styles.btnClass}`}
                        onClick={onConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? "Processing..." : confirmText}
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
