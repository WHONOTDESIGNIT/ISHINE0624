import React from 'react';
import Breadcrumbs from '../components/Breadcrumbs';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Breadcrumbs backgroundImage="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200" />

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Terms of Service</h1>
          <p className="text-gray-600 leading-relaxed mb-4">Effective date: 1 June 2025</p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms of Service (“Terms”) govern your use of the ishine.dev website, services and
            products provided by ISHINE. By accessing or purchasing from the Site you agree to be
            bound by these Terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Orders &amp; Payment</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
            <li>Prices are listed in EUR and include applicable VAT unless stated otherwise.</li>
            <li>We accept credit cards, PayPal and bank transfer via our secure checkout.</li>
            <li>All orders are subject to acceptance and availability.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Shipping &amp; Delivery</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Orders placed before 14:00 UTC ship the same business day. Free express shipping applies
            to EU &amp; US destinations; delivery times vary for other regions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Returns</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            You may return unused products within 40 days of delivery for a full refund. Return
            shipping is free within the EU. Contact support@ishine.dev to obtain an RMA label.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Warranty</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Devices are covered by a 2-year limited warranty against manufacturing defects. This does
            not cover damage caused by misuse, water exposure or unauthorised modifications.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            All content on the Site including text, graphics, logos and images is the property of
            ISHINE and protected by copyright laws. You may not reproduce or redistribute any
            content without prior written consent.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            To the maximum extent permitted by law, ISHINE shall not be liable for any indirect or
            consequential damages arising out of your use of the Site or products.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            These Terms shall be governed by the laws of Germany. All disputes shall be subject to
            the exclusive jurisdiction of the courts of Berlin.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We reserve the right to modify these Terms at any time. Updates will be posted on this
            page with a revised effective date.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            For questions about these Terms please email <a href="mailto:support@ishine.dev" className="text-blue-600 underline">support@ishine.dev</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService; 