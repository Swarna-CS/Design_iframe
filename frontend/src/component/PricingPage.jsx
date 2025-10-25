// src/component/PricingPage.jsx
export default function PricingPage() {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-900">
          Support & Maintenance Plans
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We build and operate production platforms — temple portals, community portals,
          LMS, agriculture marketplaces, and more. Pricing depends on complexity,
          hosting, integrations, and SLA.
        </p>

        {/* Plans */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Basic */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Starter</h2>
            <p className="text-sm text-gray-600 mt-2">
              For early-stage projects and pilot launches.
            </p>
            <ul className="text-sm text-gray-700 mt-4 space-y-2 text-left">
              <li>✔ Custom-branded site</li>
              <li>✔ Basic hosting & updates</li>
              <li>✔ Email support</li>
            </ul>
            <div className="mt-6 text-gray-900 font-semibold text-xl">
              Quote on request
            </div>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-indigo-500">
            <h2 className="text-lg font-semibold text-gray-900">Business</h2>
            <p className="text-sm text-gray-600 mt-2">
              For active portals with users, logins, content, etc.
            </p>
            <ul className="text-sm text-gray-700 mt-4 space-y-2 text-left">
              <li>✔ Secure login / user accounts</li>
              <li>✔ Feature updates & improvements</li>
              <li>✔ Priority support / SLA</li>
              <li>✔ Analytics & reporting</li>
            </ul>
            <div className="mt-6 text-gray-900 font-semibold text-xl">
              Quote on request
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-xl shadow p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Enterprise</h2>
            <p className="text-sm text-gray-600 mt-2">
              For production-critical platforms (govt, orgs, multi-location).
            </p>
            <ul className="text-sm text-gray-700 mt-4 space-y-2 text-left">
              <li>✔ Compliance & audit support</li>
              <li>✔ Custom integrations / APIs</li>
              <li>✔ 24/7 support</li>
              <li>✔ Dedicated manager</li>
            </ul>
            <div className="mt-6 text-gray-900 font-semibold text-xl">
              Quote on request
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
          >
            Get a custom quote
          </a>
          <p className="text-xs text-gray-500 mt-3">
            Typical engagements start with setup + monthly maintenance.
          </p>
        </div>
      </div>
    </section>
  );
}
