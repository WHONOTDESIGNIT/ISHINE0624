import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Breadcrumbs backgroundImage="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1200" />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 leading-relaxed mb-4">
            Last updated: 1 June 2025
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Introduction</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            ISHINE (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose and safeguard your information when you visit
            <span className="font-medium"> ishine.dev</span> (the “Site”).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Information We Collect</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li><strong>Personal Data</strong> — name, email address, shipping address &amp; phone number.</li>
            <li><strong>Device Data</strong> — IP address, browser type, time zone and cookies.</li>
            <li><strong>Order Data</strong> — products purchased, payment method &amp; transaction IDs.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Use Your Data</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-6">
            <li>To process and fulfil your orders.</li>
            <li>To communicate with you regarding your purchase or inquiries.</li>
            <li>To improve and optimise the Site (analytics, A/B testing).</li>
            <li>To prevent fraud and comply with legal obligations.</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Sharing Your Data</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We only share your personal information with third parties to help us use your data as
            described above. Examples include Shopify (e-commerce platform), Stripe (payment), UPS
            (shipping) and Google Analytics (website statistics).
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Depending on your location, you may have the right to access, correct or delete the
            personal data we hold about you, and to object to or restrict certain processing. To
            exercise these rights, email <a href="mailto:privacy@ishine.dev" className="text-blue-600 underline">privacy@ishine.dev</a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We keep order records for at least 7 years to comply with tax and regulatory
            requirements. Device logs are stored for up to 14 months.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Changes</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We may update this Privacy Policy from time to time to reflect operational or legal
            changes. Revisions will be posted here with a new “Last updated” date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please email
            <a href="mailto:privacy@ishine.dev" className="text-blue-600 underline"> privacy@ishine.dev</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy; 