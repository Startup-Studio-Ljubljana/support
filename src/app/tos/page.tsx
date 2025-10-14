import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactMarkdown from "react-markdown";

const termsOfServiceContent = `
# Terms of Service

**Last updated:** July 12, 2025

## Agreement to Terms

By using Bauscribe, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our services.

## Service Description

Bauscribe provides specialized translation and localization services for Adobe InDesign files, focusing on technical documentation, product catalogs, brochures, and marketing materials for manufacturers in the construction materials industry (including flooring, chemicals, cement, wood products, and related sectors).

Bauscribe's services include:

- Translation and localization of InDesign files into multiple languages
- Preservation of industry-specific terminology and technical accuracy
- Maintenance of document formatting and layout
- Adaptation of measurements and units according to local standards
- Quality assurance for technical content

## User Obligations

When using Bauscribe, you agree to:

- Provide complete and accurate InDesign files with all linked assets and fonts
- Ensure you have the legal right to translate and distribute the content
- Provide necessary context, terminology glossaries, or style guides when applicable
- Respond to clarification requests in a timely manner
- Review and approve deliverables within agreed timeframes

## Payment Terms

- Services are billed based on word count, complexity, and target languages
- Payment terms will be specified in individual project quotes
- Initial projects may require upfront payment or deposit
- Invoices are due within 30 days unless otherwise agreed
- Late payments may result in suspension of services

## Translation Quality and Revisions

Bauscribe strives for the highest quality in technical translation:

- All translations are performed by professional translators with industry expertise
- Bauscribe maintains terminology consistency across all your materials
- One round of revisions is included for feedback on translation accuracy
- Additional revision rounds may incur extra charges
- Bauscribe is not responsible for errors in source materials

## Intellectual Property

- You retain all rights to your original content and translated materials
- Bauscribe may retain copies of projects for quality assurance and future reference
- You grant Bauscribe the right to use your company name as a reference (unless you opt out)
- Bauscribe retains rights to our translation methodologies and processes

## Confidentiality

Bauscribe treats all client materials as confidential:

- Your files and content will not be shared with third parties
- Bauscribe implements industry-standard security measures to protect your data
- Translators and staff sign confidentiality agreements
- Files are securely stored and deleted upon request after project completion

## Delivery and Timeline

- Estimated delivery times will be provided with each quote
- Timelines depend on project complexity, word count, and language pairs
- Delays caused by late client feedback may extend delivery dates
- Rush services may be available for additional fees

## Limitation of Liability

To the maximum extent permitted by law:

- Bauscribe is not liable for indirect, incidental, or consequential damages
- Bauscribe's total liability is limited to the amount paid for the specific project
- Bauscribe is not responsible for how translated materials are used or distributed
- Client is responsible for final approval and legal compliance in target markets

## Termination

Either party may terminate services:

- You may cancel a project with written notice (work completed will be billed)
- Bauscribe may terminate services for non-payment or breach of terms
- Upon termination, you will receive all completed work
- Confidentiality obligations survive termination

## Governing Law

These Terms are governed by the laws of the jurisdiction where Bauscribe is registered. Any disputes will be resolved through good-faith negotiation or arbitration.

## Changes to Terms

Bauscribe reserves the right to modify these terms at any time. Changes will be effective upon posting. Continued use of Bauscribe constitutes acceptance of modified terms.

## Contact Us

For questions about these Terms of Service, please contact us at info@bauscribe.com.
`;

export default function TermsOfService() {
  return (
    <div className="min-h-[100dvh]">
      <main className="flex flex-col relative">
        <Navbar />

        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24 pb-16 dark:from-indigo-950/10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="terms-of-service">
              <ReactMarkdown
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-900 dark:text-white">
                      {children}
                    </h2>
                  ),
                  p: ({ children }) => (
                    <p className="text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300 space-y-2">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => (
                    <li className="text-lg ml-4">{children}</li>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold text-gray-900 dark:text-white">
                      {children}
                    </strong>
                  ),
                }}
              >
                {termsOfServiceContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
