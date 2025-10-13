import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ReactMarkdown from "react-markdown";

const privacyPolicyContent = `
# Privacy Policy

**Last updated:** July 12, 2025

## Introduction

Bauscribe respects your privacy and is committed to protecting your personal data. This privacy policy explains how Bauscribe handles your personal information when you use our InDesign translation and localization services.

## Information We Collect

Bauscribe collects information to provide better services to all our users. This includes:

- Personal information you provide to us (name, email, company details)
- InDesign files and related assets you submit for translation
- Information we get from your use of Bauscribe
- Usage data and analytics

## How We Use Information

Bauscribe uses the information we collect to:

- Maintain and improve our services
- Develop new features and services
- Protect our users and prevent fraud
- Communicate with you about updates and offerings

## Information We Share

Bauscribe does not share personal information with companies, organizations, or individuals outside of our company unless one of the following circumstances applies:

- With your consent
- For legal reasons
- To protect rights, property, or safety

## Data Security

Bauscribe implements appropriate security measures to protect your personal information and translation files from unauthorized access, alteration, disclosure, or destruction.

## Your Rights

You have the right to:

- Access your personal data
- Request correction of your data
- Request deletion of your data
- Object to processing of your data

## Contact Us

If you have any questions about this Privacy Policy, please contact us at info@bauscribe.com.
`;

export default function PrivacyPolicy() {
  return (
    <div className="min-h-[100dvh]">
      <main className="flex flex-col relative">
        <Navbar />

        <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 pt-24 pb-16 dark:from-indigo-950/10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="privacy-policy">
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
                {privacyPolicyContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
