import { openai } from "@ai-sdk/openai";
import { fireworks } from "@ai-sdk/fireworks";
import { wrapLanguageModel, extractReasoningMiddleware } from "ai";

export const MODEL = openai('gpt-4.1');

// If you want to use a Fireworks model, uncomment the following code and set the FIREWORKS_API_KEY in Vercel
// NOTE: Use middleware when the reasoning tag is different than think. (Use ChatGPT to help you understand the middleware)
// export const MODEL = wrapLanguageModel({
//     model: fireworks('fireworks/deepseek-r1-0528'),
//     middleware: extractReasoningMiddleware({ tagName: 'think' }), // Use this only when using Deepseek
// });


function getDateAndTime(): string {
    const now = new Date();
    const dateStr = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const timeStr = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    });
    return `The day today is ${dateStr} and the time right now is ${timeStr}.`;
}

export const DATE_AND_TIME = getDateAndTime();

export const AI_NAME = "Maha";
export const OWNER_NAME = "Meghana & Sowmya";

export const WELCOME_MESSAGE = `Hello! I'm ${AI_NAME}, an AI assistant created by ${OWNER_NAME}. Ask me anything about Maharashtra RERA projects, registrations, rules, compliance or Maharashtra real estate - I’m here to help you find accurate information quickly.`

export const CLEAR_CHAT_TEXT = "New Chat";

    export const MODERATION_DENIAL_MESSAGE_SEXUAL = "I can't discuss explicit sexual content. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_SEXUAL_MINORS = "I can't discuss content involving minors in a sexual context. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_HARASSMENT = "I can't engage with harassing content. Please be respectful.";
    export const MODERATION_DENIAL_MESSAGE_HARASSMENT_THREATENING = "I can't engage with threatening or harassing content. Please be respectful.";
    export const MODERATION_DENIAL_MESSAGE_HATE = "I can't engage with hateful content. Please be respectful.";
    export const MODERATION_DENIAL_MESSAGE_HATE_THREATENING = "I can't engage with threatening hate speech. Please be respectful.";
    export const MODERATION_DENIAL_MESSAGE_ILLICIT = "I can't discuss illegal activities. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_ILLICIT_VIOLENT = "I can't discuss violent illegal activities. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_SELF_HARM = "I can't discuss self-harm. If you're struggling, please reach out to a mental health professional or crisis helpline.";
    export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INTENT = "I can't discuss self-harm intentions. If you're struggling, please reach out to a mental health professional or crisis helpline.";
    export const MODERATION_DENIAL_MESSAGE_SELF_HARM_INSTRUCTIONS = "I can't provide instructions related to self-harm. If you're struggling, please reach out to a mental health professional or crisis helpline.";
    export const MODERATION_DENIAL_MESSAGE_VIOLENCE = "I can't discuss violent content. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_VIOLENCE_GRAPHIC = "I can't discuss graphic violent content. Please ask something else.";
    export const MODERATION_DENIAL_MESSAGE_DEFAULT = "Your message violates our guidelines. I can't answer that.";
    export const MODERATION_DENIAL_MESSAGE_LEGAL_ADVICE =
  "I can't provide professional legal advice or interpret laws for legal disputes. Please consult a qualified legal professional.";

export const MODERATION_DENIAL_MESSAGE_FINANCIAL_ADVICE =
  "I can't provide personalised financial or investment advice for property purchases or returns. Please consult a financial advisor.";

export const MODERATION_DENIAL_MESSAGE_TAX_STAMP_DUTY =
  "I can't confirm stamp duty, tax calculations, or filing-related financial advice. Please verify with an authorised professional or government portal.";

export const MODERATION_DENIAL_MESSAGE_DISPUTES =
  "I can't intervene in personal disputes between buyers and developers or issue judgments. Please use MahaRERA’s official grievance redressal channels.";

export const MODERATION_DENIAL_MESSAGE_DEFAMATION =
  "I can't make accusations or defamatory statements about builders, brokers, or buyers. Please rely only on official MahaRERA orders and records.";

export const MODERATION_DENIAL_MESSAGE_DOCUMENT_DRAFTING =
  "I can't draft or validate legal documents such as agreements or notices. Please consult a legal professional for legally binding documents.";

export const MODERATION_DENIAL_MESSAGE_PRIVATE_INFO =
  "I can't help with accessing or sharing private or confidential information about builders, allottees, or third parties.";

export const MODERATION_DENIAL_MESSAGE_BYPASSING_RERA =
  "I can't assist in bypassing or avoiding RERA registration, compliance requirements, or government processes.";

export const MODERATION_DENIAL_MESSAGE_PRICE_PREDICTION =
  "I can't guarantee or predict real estate price movements, appreciation, or investment returns.";

export const MODERATION_DENIAL_MESSAGE_OUT_OF_SCOPE =
  "I can assist only with Maharashtra RERA and real estate regulations in Maharashtra. Your question seems outside this scope — please ask about one of those topics.";

export const PINECONE_TOP_K = 40;
export const PINECONE_INDEX_NAME = "my-ai";
