import { Loader2 } from "lucide-react";

interface GlobalLoaderProps {
    message?: string;
    fullScreen?: boolean;
}

export function GlobalLoader({ message = "Loading...", fullScreen = false }: GlobalLoaderProps) {
    const content = (
        <div className="flex flex-col items-center justify-center space-y-3">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-sm font-medium text-muted-foreground animate-pulse">
                {message}
            </p>
        </div>
    );

    if (fullScreen) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
                {content}
            </div>
        );
    }

    return (
        <div className="w-full h-full flex items-center justify-center min-h-[200px] p-8">
            {content}
        </div>
    );
}
