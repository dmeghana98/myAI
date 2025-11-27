import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { OWNER_NAME } from "@/config";

export default function Terms() {
    return (
        <div className="w-full flex justify-center p-10">
            <div className="w-full max-w-screen-md space-y-6">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-500 hover:text-gray-700 underline"
                >
                    <ArrowLeftIcon className="w-4 h-4" />
                    Back to Chatbot
                </Link>
                <h1 className="text-3xl font-bold">Maha</h1>
                <h2 className="text-2xl font-semibold">Terms of Use / Disclaimer</h2>

                <p className="text-gray-700">
                    The following terms govern your use of Maha ("AI Chatbot" or "I"), an artificial intelligence assistant provided by Maharashtra Real Estate Regulatory Authority ("MahaRERA"). By using MAHA, you agree to these terms. If you disagree, please discontinue use immediately.
                </p>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">General Information</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-gray-700">
                            <span className="font-semibold">Provider and Purpose:</span> MAHA is developed by MahaRERA to assist users with information about real estate regulations in Maharashtra, including RERA registration procedures, project verification, complaint filing, homebuyer rights, and developer obligations under the Real Estate (Regulation and Development) Act, 2016. I am an informational tool, not a replacement for official MahaRERA procedures or legal consultation.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Third-Party Involvement:</span>{" "}
                            MAHA uses artificial intelligence technologies that may involve third-party platforms. Your queries may be processed and stored by these systems. Complete data security cannot be guaranteed, and transmission may be subject to standard internet risks.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">No Guarantee of Accuracy:</span>{" "}
                            I may provide inaccurate, incomplete, or outdated information. Maharashtra RERA regulations, fees, and compliance requirements change periodically. Always verify critical information through the official MahaRERA website (maharera.mahaonline.gov.in) or by contacting MahaRERA offices directly before making important decisions.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Not Legal Advice:</span>{" "}
                            My responses do not constitute legal advice or official government communication. I cannot interpret legal agreements, make determinations about RERA violations, or provide binding opinions on disputes. Consult qualified legal professionals or approach MahaRERA's official channels for matters requiring professional judgment.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Service Availability:</span>{" "}
                            MAHA may be temporarily unavailable due to maintenance, technical issues, or other circumstances. MahaRERA reserves the right to modify, suspend, or discontinue my services at any time without notice.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Liability</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-gray-700">
                            <span className="font-semibold">No Responsibility for Damages:</span> {OWNER_NAME}, MahaRERA, the Government of Maharashtra, and their representatives shall not be liable for any direct, indirect, financial, or consequential damages arising from:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>
                                    Financial losses from property transactions or missed deadlines 
                                </li>
                                <li>
                                    Rejected applications due to incorrect information 
                                </li>
                                <li>
                                    Loss of legal rights or remedies  
                                </li>
                                <li>
                                    Reliance on MAHA's responses 
                                </li>
                                <li>
                                    Service interruptions or data breaches
                                </li>
                            </ul>
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">
                                Use at Your Own Risk:
                            </span>{" "}
                            MAHA is provided "as-is" without warranties of any kind. MahaRERA disclaims all warranties regarding accuracy, completeness, or fitness for any purpose.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">
                                Your Responsibility:
                            </span>{" "}
                            You are solely responsible for verifying information, checking project registrations, understanding your obligations, and making property-related decisions. Critical actions require verification through official channels and professional consultation.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Future Fees:</span> While Maha is currently provided free of charge, I reserve the right
                            to implement a fee for its use at any time.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">User Responsibilities</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-gray-700">
                            <span className="font-semibold">Eligibility:</span> Use of Maha is restricted to individuals aged 18 or older.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">You Must</span> 
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>Provide accurate information</li>
                                <li>Use MAHA for lawful, informational purposes only</li>
                            </ul>
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Prohibited Conduct:</span> By
                            using the AI Chatbot, you agree not to:
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                                <li>Post or transmit content that is defamatory, offensive, intimidating, illegal, racist, discriminatory, obscene, or otherwise inappropriate.</li>
                                <li>Use the AI Chatbot to engage in unlawful or unethical activities.</li>
                                <li>Attempt to compromise the security or functionality of Maha.</li>
                                <li>Copy, distribute, modify, reverse engineer, decompile, or extract the source code of Maha without explicit written consent.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Data Privacy and Security</h3>
                    <ol className="list-decimal list-inside space-y-3">
                        <li className="text-gray-700">
                            <span className="font-semibold">No Privacy Guarantee:</span> The
                            AI Chatbot does not guarantee privacy, confidentiality, or
                            security of the information you provide. Conversations may be
                            reviewed by {OWNER_NAME}, collaborators, partners, or affiliated
                            entities for purposes such as improving Maha.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Public Information:</span> Any
                            information you provide through Maha is treated as
                            public.
                        </li>
                        <li className="text-gray-700">
                            <span className="font-semibold">Data Transmission:</span> Inputs
                            may be transmitted to and processed by third-party services.
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Critical Warning</h3>

                <p className="text-gray-700">
                    Never share Aadhaar numbers, bank details, property documents, passwords, or confidential information through MAHA.
                </p>
                </div>

                div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Intellectual Property</h3>

                <p className="text-gray-700">
                    All content, design, and functionality of MAHA are owned by MahaRERA and protected under Indian copyright, trademark, and IT laws. You receive a limited license for personal use only. You cannot reproduce, reverse engineer, or distribute MAHA's services.
                </p>
                </div>

            div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Official Transactions - Use Official Channels</h3>

                <p className="text-gray-700">
                    For these actions, use official MahaRERA channels, NOT MAHA: Filing complaints against developers or agents, submitting project or agent registration applications, making payments for fees, renewals, or penalties, obtaining registration certificates or compliance documents, reporting RERA violations or fraudulent projects, matters with legal deadlines or requiring formal adjudication.
                </p>

                <p className="text-gray-700">MAHA can guide you on procedures, but cannot perform official transactions. Visit maharera.mahaonline.gov.in or MahaRERA offices for formal processes.</p>
                </div>

        div className="space-y-4">
                    <h3 className="text-2xl font-semibold">Third-Party Links</h3>

                <p className="text-gray-700">
                    MAHA may link to developer websites or real estate portals. MahaRERA does not endorse these sites and is not responsible for their content or legitimacy. Always verify project registrations through official MahaRERA records, not external websites.
                </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Indemnification</h3>
                    <p className="text-gray-700">
                        By using the Maha, you agree to indemnify and hold harmless
                        {OWNER_NAME}, collaborators, partners, affiliated entities, and
                        representatives from any claims, damages, losses, or liabilities
                        arising out of your use of the AI Chatbot or violation of these
                        terms. You agree to indemnify MahaRERA from any claims, damages, or costs arising from your violation of these terms or misuse of MAHA.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Governing Law and Jurisdiction</h3>
                    <p className="text-gray-700">
                        These terms are governed by the laws of the State of North Carolina,
                        United States. Additional jurisdictions may apply for users outside
                        the United States, subject to applicable local laws. In case of
                        conflicts, the laws of North Carolina shall prevail to the extent
                        permissible. Any disputes arising under or in connection with these
                        terms shall be subject to the exclusive jurisdiction of the courts
                        located in North Carolina.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
                    <p className="text-gray-700">
                        By using the Maha, you confirm that you have read, understood,
                        and agreed to these Terms of Use and Disclaimer.You understand MAHA provides general information only, not legal advice. You will verify project registrations and critical information through official channels.
                        You accept all liability limitations. You will use official channels for formal processes. If you do not
                        agree with any part of these terms, you may not use the AI Chatbot.
                    </p>
                </div>

                <div className="mt-8 text-sm text-gray-600">
                    <p>Last Updated: November 17, 2025</p>
                </div>
            </div>
        </div>
    );
}
