import { cn } from "@/lib/utils";

export function ChatHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex items-center py-4 px-6 bg-[#777BB0] min-h-[64px]">
            {children}
        </div>
    );
}
