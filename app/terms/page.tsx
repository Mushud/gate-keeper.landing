import { HugeiconsIcon } from '@hugeicons/react';
import { ShieldIcon } from '@hugeicons/core-free-icons';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | GateKeeperPro',
  description: 'Terms and Conditions for GateKeeperPro OTP Verification Platform',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-zinc-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <Link href="/" className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="GateKeeperPro" 
              className="w-10 h-10 object-contain"
            />
            <span className="text-xl font-bold text-zinc-900">GateKeeperPro</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">Terms and Conditions</h1>
        <p className="text-zinc-600 mb-8">Last updated: February 14, 2026</p>

        <div className="prose prose-zinc max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              By accessing or using GateKeeperPro&apos;s services, including our OTP verification platform, 
              API services, and related tools (collectively, the &quot;Services&quot;), you agree to be bound by 
              these Terms and Conditions. If you do not agree to these terms, please do not use our Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Description of Services</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              GateKeeperPro provides one-time password (OTP) verification services, SMS/Email delivery, 
              and authentication solutions for businesses. Our Services include:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>OTP generation and verification</li>
              <li>SMS and Email campaign management</li>
              <li>API integration for authentication</li>
              <li>KYC verification services</li>
              <li>Account management and billing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. Account Registration</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              To use our Services, you must register for an account and provide accurate, complete, 
              and current information. You are responsible for:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
              <li>Ensuring your contact information is current</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Acceptable Use Policy</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              You agree not to use our Services to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Send unsolicited messages or spam</li>
              <li>Engage in fraudulent or illegal activities</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe upon the rights of others</li>
              <li>Distribute malware or harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Billing and Payments</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Our Services operate on a credit-based system. You agree to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Pay all fees associated with your use of the Services</li>
              <li>Provide valid payment information</li>
              <li>Understand that credits are non-refundable unless required by law</li>
              <li>Be responsible for any taxes applicable to your purchases</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Service Level and Availability</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              While we strive to provide reliable Services, we do not guarantee uninterrupted or 
              error-free operation. We may temporarily suspend Services for maintenance or updates. 
              Delivery of SMS/Email messages depends on third-party carriers and may be subject to delays.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Intellectual Property</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              All content, trademarks, and intellectual property associated with GateKeeperPro 
              remain our exclusive property. You are granted a limited, non-exclusive license to 
              use our Services in accordance with these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Data Protection</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Your use of our Services is also governed by our Privacy Policy. By using our Services, 
              you consent to the collection and use of information as described in our Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. Limitation of Liability</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              To the maximum extent permitted by law, GateKeeperPro shall not be liable for any 
              indirect, incidental, special, consequential, or punitive damages, including but not 
              limited to loss of profits, data, or business opportunities.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Termination</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We reserve the right to suspend or terminate your account if you violate these Terms 
              or engage in activities that harm our Services or other users. You may terminate your 
              account at any time by contacting our support team.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Changes to Terms</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We may update these Terms from time to time. We will notify you of significant changes 
              via email or through our Services. Continued use after changes become effective 
              constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Contact Information</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              If you have questions about these Terms, please contact us at:
            </p>
            <p className="text-zinc-700">
              Email: support@itmsgh.com<br />
              Address: GateKeeperPro
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-200">
          <Link 
            href="/" 
            className="text-zinc-900 font-medium hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 py-6 text-center text-sm text-zinc-500">
          © 2026 GateKeeperPro. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
