import { cn } from "@/lib/utils";

export function ChatHeaderBlock({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={cn("flex items-center gap-3", className)}>
            {children}
        </div>
    )
}

export function ChatHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex items-center justify-between py-4 px-6 bg-[#787AB0] text-white font-bold">
            {children}
        </div>
    )
}
