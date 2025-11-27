import { UIMessage } from "ai";
import { Response } from "@/components/ai-elements/response";
import { MessageAvatar } from "../ai-elements/message";

export function UserMessage({ message }: { message: UIMessage }) {
    return (
        <div className="whitespace-pre-wrap w-full flex justify-end items-center gap-2">
            <div className="max-w-lg w-fit px-4 py-3 rounded-[20px] bg-[#777BB0] text-black">
                <div className="text-sm">
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                        }
                    })}
                </div>
            </div>
            <MessageAvatar src="/user-icon.png" name="User" />
        </div>
    )
}
