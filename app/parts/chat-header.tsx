import { cn } from "@/lib/utils";

export function ChatHeaderBlock({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={cn("gap-2 flex flex-1", className)}>
            {children}
        </div>
    )
}

export function ChatHeader({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex justify-start py-5 px-5 bg-linear-to-b from-background to-transparent">
            <h1 className="font-semibold text-xl">Chat with MAHA</h1>
        </div>
    )
}
