export default function About() {
  return (
    <section className="bg-white text-gray-800 min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl font-semibold text-gray-900 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mt-4">
          We design, build, and operate production-ready digital platforms.
          Everything you see on this site is live, in use, and actively
          maintained by our team.
        </p>

        {/* What this site is */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-gray-900">
            What this website shows
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            The homepage showcases active platforms we currently manage for
            different use cases: temple portals, private communities, learning
            systems, and digital marketplaces. Each “screen” links to a real,
            running product. These are not mockups or screenshots — they are
            live systems.
          </p>
        </div>

        {/* What we do */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            What we do for our clients
          </h2>

          <ul className="mt-4 space-y-4 text-gray-700">
            <li className="flex items-start">
              <span className="text-indigo-600 font-semibold mr-2">•</span>
              <span>
                <strong>Full product delivery:</strong> We build custom portals
                and applications for specific needs — for example:
                temple/organization websites, member communities, LMS platforms,
                and agriculture / marketplace solutions.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-indigo-600 font-semibold mr-2">•</span>
              <span>
                <strong>Branding and configuration:</strong> We tailor each
                platform to match the client’s identity, structure, language,
                and workflows.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-indigo-600 font-semibold mr-2">•</span>
              <span>
                <strong>Hosting and reliability:</strong> We keep the platforms
                online, secure, and performant.
              </span>
            </li>

            <li className="flex items-start">
              <span className="text-indigo-600 font-semibold mr-2">•</span>
              <span>
                <strong>Ongoing maintenance:</strong> We handle feature updates,
                content changes, integrations, and day-to-day support so the
                client doesn’t need an internal engineering team.
              </span>
            </li>
          </ul>
        </div>

        {/* Live examples */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-900">
            A few examples
          </h2>

          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Managudi</h3>
              <p className="text-gray-700 text-sm mt-2">
                A digital temple portal platform. Supports local temple identity,
                services, information, and engagement.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">OurCommunity</h3>
              <p className="text-gray-700 text-sm mt-2">
                A secure community / member portal with login, access control,
                and private content.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">LMS Board</h3>
              <p className="text-gray-700 text-sm mt-2">
                A learning management system for onboarding, training, and
                delivering content to members or staff.
              </p>
            </div>

            <div className="rounded-lg border border-gray-200 p-4 shadow-sm">
              <h3 className="font-semibold text-gray-900">Direct Farm</h3>
              <p className="text-gray-700 text-sm mt-2">
                A marketplace-style platform focused on agriculture and
                producer visibility.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-800 font-medium">
            Need a platform like this for your organization?
          </p>
          <a
            href="/contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow mt-4"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
