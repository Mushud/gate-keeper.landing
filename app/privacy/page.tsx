import { HugeiconsIcon } from '@hugeicons/react';
import { ShieldIcon } from '@hugeicons/core-free-icons';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | GateKeeperPro',
  description: 'Privacy Policy for GateKeeperPro OTP Verification Platform',
};

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-zinc-900 mb-4">Privacy Policy</h1>
        <p className="text-zinc-600 mb-8">Last updated: February 14, 2026</p>

        <div className="prose prose-zinc max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">1. Introduction</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              GateKeeperPro (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our OTP verification platform and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-zinc-900 mb-3">2.1 Information You Provide</h3>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Account registration details (name, email, phone number)</li>
              <li>Payment and billing information</li>
              <li>Communication preferences</li>
              <li>Support inquiries and feedback</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 mb-3">2.2 Information We Collect Automatically</h3>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4 mb-4">
              <li>Device information (IP address, browser type, operating system)</li>
              <li>Usage data (pages visited, features used, timestamps)</li>
              <li>API usage metrics and logs</li>
              <li>OTP delivery and verification logs</li>
            </ul>

            <h3 className="text-xl font-medium text-zinc-900 mb-3">2.3 Information from Third Parties</h3>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Payment processor data for transactions</li>
              <li>SMS/Email delivery status from carriers</li>
              <li>KYC verification results (if applicable)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">3. How We Use Your Information</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Provide and maintain our Services</li>
              <li>Process OTP verifications and deliver messages</li>
              <li>Process payments and manage billing</li>
              <li>Send service notifications and updates</li>
              <li>Analyze usage patterns to improve our Services</li>
              <li>Detect and prevent fraud or abuse</li>
              <li>Comply with legal obligations</li>
              <li>Provide customer support</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">4. Information Sharing</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> SMS/Email delivery partners, payment processors, cloud infrastructure providers</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or government request</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize sharing</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">5. Data Security</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational measures to protect your data, including:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Encryption of data in transit and at rest</li>
              <li>Secure API authentication mechanisms</li>
              <li>Regular security audits and monitoring</li>
              <li>Access controls and employee training</li>
              <li>Incident response procedures</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">6. Data Retention</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Provide our Services to you</li>
              <li>Comply with legal and regulatory requirements</li>
              <li>Resolve disputes and enforce agreements</li>
              <li>Maintain audit logs for security purposes</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              OTP codes expire after verification or timeout and are securely deleted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">7. Your Rights</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              To exercise these rights, please contact us at support@itmsgh.com.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">8. Cookies and Tracking</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We use cookies and similar technologies to:
            </p>
            <ul className="list-disc list-inside text-zinc-700 space-y-2 ml-4">
              <li>Maintain your session and authentication</li>
              <li>Remember your preferences</li>
              <li>Analyze usage patterns</li>
              <li>Improve our Services</li>
            </ul>
            <p className="text-zinc-700 leading-relaxed mt-4">
              You can control cookies through your browser settings.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">9. International Transfers</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Your information may be transferred to and processed in countries other than your own. 
              We ensure appropriate safeguards are in place for international transfers in compliance 
              with applicable data protection laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Our Services are not intended for individuals under 18 years of age. We do not knowingly 
              collect personal information from children. If you believe a child has provided us with 
              personal information, please contact us.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">11. Changes to This Policy</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              We may update this Privacy Policy periodically. We will notify you of material changes 
              via email or through our Services. The &quot;Last updated&quot; date indicates when changes were made.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-zinc-900 mb-4">12. Contact Us</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              For questions about this Privacy Policy or our data practices, contact us at:
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
